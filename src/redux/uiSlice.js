import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNotificationOpen: false,
    openSidebar: false,
    openSettingsSubBar: false,
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
        },
        setOpenSettingsSubBar: (state, action) => {
            state.openSettingsSubBar = action.payload;
        }
    }
});

export const {
    toggleNotification,
    setNotification,
    setOpenSidebar,
    setOpenSettingsSubBar
} = uiSlice.actions;

export default uiSlice.reducer;