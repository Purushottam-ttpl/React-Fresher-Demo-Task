
import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('Token');
const Role = localStorage.getItem("UserType");

const initialState = {
    isAuthenticated: token ? true: false,
    accessToken:null,
    role: null, 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action)=>{
            state.isAuthenticated = false;
            state.accessToken = null;
            state.role = action.payload;
            localStorage.setItem("UserType",action.payload)

            console.log("Role from login slice---->",state.role)
        },

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
            localStorage.removeItem("UserType",action.payload)
        },
    },
});



export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
