import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import ordersReducer from "../features/orders/ordersSlice";
import orderHistoryReducer from "../features/orders/orderHistorySlice";
import accountReducer from "../features/account/accountSlice";

const rootReducer = {
  products: productsReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  orderHistory: orderHistoryReducer,
  account: accountReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
