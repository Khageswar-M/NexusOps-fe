import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ["Dashboard"],
    width: window.innerWidth,
    appName: "NexusOps"
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        pushTitle: (state, action) => {
            state.title.push(action.payload);
        },
        cleanTitle: (state)=> {
            state.title = [];
        },
        setScreenWidth: (state, action) => {
            state.width = action.payload;
        },
        setAppName: (state, action) => {
            state.appName = action.payload;
        }
    }
});

export const {setTitle, pushTitle, cleanTitle, setScreenWidth, toggleTheme, setAppName} = appSlice.actions;

export default appSlice.reducer;