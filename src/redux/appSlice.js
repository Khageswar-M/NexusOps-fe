import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ["Dashboard"]
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
        cleanTitle: (state, action)=> {
            state.title = [];
        }
    }
});

export const {setTitle, pushTitle, cleanTitle} = appSlice.actions;

export default appSlice.reducer;