import { createSlice } from "@reduxjs/toolkit";

const initialState = { oth: 123, name: "asdfasdfasdfsa" };

const someOtherSlice = createSlice({
  name: "someOther",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setOtherNum(state, action) {
      state.oth = action.payload;
    }
  },
  extraReducers: {}
});

export default someOtherSlice;
