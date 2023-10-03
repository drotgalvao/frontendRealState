import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
            state.success = true;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        },
    }
})

export const { signInStart, signInSuccess, signInFailure, updateUserStart, updateUserSuccess, updateUserFailure } = userSlice.actions;

export default userSlice.reducer;