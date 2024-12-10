import { createSlice } from "@reduxjs/toolkit";
import { toggleWishlistItem } from "./wishlist.utils";
import { firestore, auth } from "../../firebase/firebase.utils";
import { doc, setDoc } from "firebase/firestore";

const initialState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishItem: (state, action) => {
      state.wishlistItems = toggleWishlistItem(
        state.wishlistItems,
        action.payload
      );
      updateUserWishProfile(state.wishlistItems);
      updateLocalWishlistStorage(state.wishlistItems);
    },
    removeWishItem: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      updateUserWishProfile(state.wishlistItems);
      updateLocalWishlistStorage(state.wishlistItems);
    },
    setWishlistItems: (state, action) => {
      state.wishlistItems = action.payload;
    },
    resetWishlist: (state) => {
      state.wishlistItems = [];
    },
    toggleSelectWishItem: (state, action) => {
      const { id } = action.payload;
      const item = state.wishlistItems.find((item) => item.id === id);

      if (item) {
        item.selected = !item.selected;
      }
    },
    mergeWishlists: (state) => {
      const localWishlistItems =
        JSON.parse(localStorage.getItem("guestWishlist")) || [];
      const existingWishlistItems = Array.isArray(state.wishlistItems)
        ? state.wishlistItems
        : [];
      const combinedWishlist = [
        ...existingWishlistItems,
        ...localWishlistItems,
      ];
      const uniqueWishlist = combinedWishlist.filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      );
      state.wishlistItems = uniqueWishlist;
      updateUserWishProfile(state.wishlistItems);
      localStorage.removeItem("guestWishlist");
    },
  },
});

export const updateUserWishProfile = async (wishlistItems) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const userRef = doc(firestore, `users/${user.uid}`);
      setDoc(userRef, { wishList: wishlistItems }, { merge: true });
    } catch (error) {
      console.error("Error updating profile", error);
    }
  }
};

export const updateLocalWishlistStorage = (wishlistItems) => {
  localStorage.setItem("guestWishlist", JSON.stringify(wishlistItems));
};

export const {
  toggleWishItem,
  removeWishItem,
  setWishlistItems,
  resetWishlist,
  toggleSelectWishItem,
  mergeWishlists,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
