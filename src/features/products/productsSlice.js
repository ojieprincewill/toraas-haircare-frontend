import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const useFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const data = await useFetch(
        "http://localhost:1337/api/products?populate=*"
      );
      console.log(data.data);
      return data.data.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description
          .map((desc) => desc.children.map((child) => child.text).join(" "))
          .join(" "),
        price: product.price,
        image: product.image ? `http://localhost:1337${product.image.url}` : "",
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
