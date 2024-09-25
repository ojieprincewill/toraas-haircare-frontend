import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  reauthenticateWithCredential,
  updatePassword as updateFirebasePassword,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";

export const updatePassword = createAsyncThunk(
  "account/updatePassword",
  async (
    { email, currentPassword, newPassword },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const user = auth.currentUser;

      const credential = await reauthenticateWithCredential(
        user,
        EmailAuthProvider.credential(email, currentPassword)
      );
      await credential;

      await updateFirebasePassword(user, newPassword);

      dispatch(passwordUpdateSuccess());

      return true;
    } catch (error) {
      dispatch(passwordUpdateFailure());

      return rejectWithValue(error.message);
    }
  }
);

const passwordUpdateSuccess = () => ({ type: "account/passwordUpdateSuccess" });

const passwordUpdateFailure = () => ({ type: "account/passwordUpdateFailure" });

const accountSlice = createSlice({
  name: "account",
  initialState: {
    passwordUpdateSuccess: false,
    passwordUpdateFailure: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePassword.fulfilled, (state) => {
      state.passwordUpdateSuccess = true;
      state.passwordUpdateFailure = false;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.passwordUpdateFailure = true;
      state.passwordUpdateSuccess = false;
      console.error("Password update failed:", action.payload);
    });
  },
});

export const selectPasswordUpdateSuccess = (state) =>
  state.account.passwordUpdateSuccess;

export const selectPasswordUpdateFailure = (state) =>
  state.account.passwordUpdateFailure;

export default accountSlice.reducer;
