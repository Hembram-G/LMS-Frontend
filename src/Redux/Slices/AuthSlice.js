import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem('isloggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

// export const {} = authSlice.action;
export default authSlice.reducer;