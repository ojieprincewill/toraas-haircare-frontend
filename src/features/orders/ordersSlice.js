import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebase.utils";

export const addOrderAsync = createAsyncThunk(
  "orders/addOrderAsync",
  async (order) => {
    try {
      const docRef = await firestore.collection("orders").add(order);

      const orderId = docRef.id;

      return { ...order, id: orderId };
    } catch (error) {
      console.error("Error adding order to Firestore:", error);
      throw error;
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addOrderAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const { addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
