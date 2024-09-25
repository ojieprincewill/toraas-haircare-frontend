import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";

const initialState = {
  orders: [],
  selectedOrder: null,
  status: "idle",
  error: null,
};

export const fetchOrderHistory = createAsyncThunk(
  "orderHistory/fetchOrderHistory",
  async (userId) => {
    const q = query(
      collection(firestore, "orders"),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);

    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });

    return orders;
  }
);

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    selectOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },

    clearSelectedOrder: (state) => {
      state.selectedOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload.sort(
          (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
        );
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error fetching order history:", action.error.message);
      });
  },
});

export const { selectOrder, clearSelectedOrder } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
