
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload;
            localStorage.setItem("Token",action.payload)

            console.log("Token from login slice---->",state.accessToken)
            console.log("Authenticate from login slice---->",state.isAuthenticated)
        },
        
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.accessToken = null;
            localStorage.removeItem("Token",action.payload)
        },
    },
});



export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
