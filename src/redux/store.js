import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './uiSlice';
import appReducer from './appSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        app: appReducer
    }
})