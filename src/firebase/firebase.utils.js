import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import {
  mergeCarts,
  setCartItems,
  resetCart,
} from "../features/cart/cartSlice";
import {
  mergeWishlists,
  setWishlistItems,
  resetWishlist,
} from "../features/wishlist/wishlistSlice";
import {
  setCurrentUser,
  updateShippingAddress,
} from "../features/user/userSlice";

const firebaseConfig = {
  apiKey: "AIzaSyAcrDFO7J-KYEwuuJJeqkvBdBk0Tw2oKl4",
  authDomain: "toraas-haircare.firebaseapp.com",
  projectId: "toraas-haircare",
  storageBucket: "toraas-haircare.appspot.com",
  messagingSenderId: "244266424810",
  appId: "1:244266424810:web:df6b930fee09c3120cfa93",
  measurementId: "G-135N4NW043",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const docData = {
      displayName,
      email,
      createdAt,
      cart: [],
      wishList: [],
      ...additionalData,
    };

    try {
      await setDoc(userRef, docData);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const listenToAuthChanges = (dispatch) => {
  return onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      const snapShot = await getDoc(userRef);
      const cartItems = snapShot.data()?.cart || [];
      const wishlistItems = snapShot.data()?.wishList || [];
      const address = snapShot.data()?.shippingAddress || {};

      dispatch(setCartItems(cartItems));
      dispatch(mergeCarts());

      dispatch(setWishlistItems(wishlistItems));
      dispatch(mergeWishlists());

      dispatch(updateShippingAddress(address));
    } else {
      dispatch(resetCart());
      dispatch(resetWishlist());
    }

    dispatch(setCurrentUser(userAuth));
  });
};

export const placeOrder = async (orderDetails) => {
  try {
    const { userId, products, total } = orderDetails;

    const orderRef = await addDoc(collection(firestore, "orders"), {
      userId,
      orderNumber: `${userId}-${Date.now()}`,
      orderDate: new Date().toISOString(),
      products,
      total,
      status: "Pending",
    });

    return orderRef.id;
  } catch (error) {
    console.error("Error placing order:", error.message);
    throw error;
  }
};
