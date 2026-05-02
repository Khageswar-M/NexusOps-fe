import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNotificationOpen: false,
    screenWidth: window.innerWidth
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleNotification: (state) => {
            state.isNotificationOpen = !state.isNotificationOpen;
        },
        setNotification: (state, action) => {
            state.isNotificationOpen = action.payload;
        },
        setScreenWidth: (state, action) => {
            state.screenWidth = action.payload;
        }
    }
});

export const {
    toggleNotification,
    setNotification,
    setScreenWidth
} = uiSlice.actions;

export default uiSlice.reducer;