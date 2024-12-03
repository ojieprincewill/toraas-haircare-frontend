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
        categories: product.categories,
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
    selectedCategory: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
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

export const { selectCategory } = productsSlice.actions;
export const selectProductsByCategory = (state) => {
  const { items, selectedCategory } = state.products;
  if (!selectedCategory) return items;
  return items.filter((product) =>
    product.categories.some((cat) => cat.name === selectedCategory)
  );
};

export default productsSlice.reducer;
