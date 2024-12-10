import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { firestore, auth } from "../../firebase/firebase.utils";
import { doc, setDoc } from "firebase/firestore";

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartDisplay: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
      updateUserCartProfile(state.cartItems);
      updateLocalCartStorage(state.cartItems);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
      updateUserCartProfile(state.cartItems);
      updateLocalCartStorage(state.cartItems);
    },
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      updateUserCartProfile(state.cartItems);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      updateUserCartProfile(state.cartItems);
    },
    resetCart: (state) => {
      state.cartItems = [];
      updateUserCartProfile(state.cartItems);
      updateLocalCartStorage(state.cartItems);
    },
    mergeCarts: (state) => {
      const localCartItems =
        JSON.parse(localStorage.getItem("guestCart")) || [];
      const existingCartItems = Array.isArray(state.cartItems)
        ? state.cartItems
        : [];
      const combinedCart = [...existingCartItems, ...localCartItems];
      const uniqueCart = combinedCart.filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      );
      state.cartItems = uniqueCart;
      updateUserCartProfile(state.cartItems);
      localStorage.removeItem("guestCart");
    },
  },
});

export const updateUserCartProfile = async (cartItems) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const userRef = doc(firestore, `users/${user.uid}`);
      setDoc(userRef, { cart: cartItems }, { merge: true });
    } catch (error) {
      console.error("Error updating profile", error);
    }
  }
};

export const updateLocalCartStorage = (cartItems) => {
  localStorage.setItem("guestCart", JSON.stringify(cartItems));
};

export const {
  toggleCartDisplay,
  addItem,
  clearItem,
  removeItem,
  setCartItems,
  resetCart,
  mergeCarts,
} = cartSlice.actions;
export default cartSlice.reducer;
