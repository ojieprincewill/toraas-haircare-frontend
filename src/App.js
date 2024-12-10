import "./App.css";

import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { listenToAuthChanges } from "./firebase/firebase.utils";

import ShopPage from "./pages/shop-page/shop-page.component";
import HomePage from "./pages/home-page/home-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import WishlistPage from "./pages/wishlist-page/wishlist-page.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import LoginPage from "./pages/login-page/login-page.component";
import PolicyPage from "./pages/policy-page/policy-page.component";
import PolicyDetailsPage from "./pages/policy-details-page/policy-details-page.component";
import FaqPage from "./pages/faq-page/faq-page.component";
import CartPage from "./pages/cart-page/cart-page.component";
import AccountPage from "./pages/account-page/account-page.component";
import PasswordPage from "./pages/password-page/password-page.component";
import AddressPage from "./pages/address-page/address-page.component";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges(dispatch);

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/policy/:policyId" element={<PolicyDetailsPage />} />
        <Route path="/questions" element={<FaqPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account/*" element={<AccountPage />} />
        <Route path="/account/settings/password" element={<PasswordPage />} />
        <Route path="/account/settings/address" element={<AddressPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
