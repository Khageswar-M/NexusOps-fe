import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNotificationOpen: false,
    openSidebar: false
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
        setOpenSidebar: (state, action) => {
            state.openSidebar = action.payload;
        }
    }
});

export const {
    toggleNotification,
    setNotification,
    setOpenSidebar
} = uiSlice.actions;

export default uiSlice.reducer;