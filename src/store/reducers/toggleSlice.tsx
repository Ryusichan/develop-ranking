import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isDarkMode: boolean;
};

const initialState: InitialState = {
  isDarkMode: false,
};

const toggleSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    setisDarkMode(state, action) {
      state.isDarkMode = action.payload;
    },
  },
  extraReducers: {},
});

export default toggleSlice;
