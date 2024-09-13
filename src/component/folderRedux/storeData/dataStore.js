
import { configureStore } from '@reduxjs/toolkit';
import authSlice from "../sliceNew/newSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});
