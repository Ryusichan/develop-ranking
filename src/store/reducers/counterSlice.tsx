import { createSlice } from "@reduxjs/toolkit";
import { increaseAsync, decreaseAsync } from "../actions/counterActions";
type InitialState = {
  number: number;
  noticount: number;
};

const initialState: InitialState = {
  number: 0,
  noticount: 0
};

const ArrayV = [1,2,3,4];
const Obj = {a:{c:"c", d:"d"} , b:"2"};

let temp;


temp = Obj;

console.log(temp);
// {a:"2", b:"2"};

console.log(Obj);
// {a:"2", b:"2"};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state, action) {
      state.number = state.number + action.payload;
    },
    decrease(state, action) {
      state.number = state.number - action.payload;
    },
    totalCountDecrease(state, action) {
      state.noticount = state.noticount - 1;
    },
    setNotiListCount(state, action) {
      state.noticount = action.payload;
    }
  },
  extraReducers: builder =>
    builder
      .addCase(increaseAsync.pending, (state, action) => {})
      .addCase(increaseAsync.fulfilled, (state, action) => {})
      .addCase(increaseAsync.rejected, (state, action) => {})
      .addCase(decreaseAsync.pending, (state, action) => {})
      .addCase(decreaseAsync.fulfilled, (state, action) => {})
      .addCase(decreaseAsync.rejected, (state, action) => {})

      .addMatcher(
        action => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          console.log("add matcher activate on pending function");
        }
      )

      .addDefaultCase((state, action) => {})
});

export default counterSlice;
