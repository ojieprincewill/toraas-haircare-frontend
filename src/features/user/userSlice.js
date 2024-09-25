import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebase.utils";
import { doc, updateDoc } from "firebase/firestore";

export const updateNewShippingAddress = createAsyncThunk(
  "user/updateShippingAddress",
  async ({ userId, newShippingAddress }) => {
    try {
      const userDocRef = doc(firestore, "users", userId);
      await updateDoc(userDocRef, {
        shippingAddress: { ...newShippingAddress },
      });

      console.log("shipping address", newShippingAddress);
      return newShippingAddress;
    } catch (error) {
      throw new Error("Error updating shipping address in Firestore");
    }
  }
);

const initialState = {
  currentUser: null,
  shippingAddress: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const { setCurrentUser, updateShippingAddress } = userSlice.actions;
export default userSlice.reducer;
