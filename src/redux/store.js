import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './uiSlice';
import appReducer from './appSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        app: appReducer,
        auth: authReducer
    }
})