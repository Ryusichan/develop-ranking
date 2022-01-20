import { createAsyncThunk } from "@reduxjs/toolkit";
import counterSlice from "store/reducers/counterSlice";
// import { History } from "history";

const delay = (time: number, value: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const addPost = createAsyncThunk("post/add", async (data, thunkAPI) => {
  console.log(data);

  const result = await delay(500, {
    title: "new post",
    content: "contents"
  });

  return result;
});

export const increaseAsync = createAsyncThunk(
  "counter/increase",
  async (data, thunkAPI) => {
    // getState usage
    const state = thunkAPI.getState();
    console.log("thunk API ", state);

    // dispatch and async usage
    setTimeout(
      () => thunkAPI.dispatch(counterSlice.actions.increase(data)),
      1000
    );
  }
);

export const decreaseAsync = createAsyncThunk(
  "counter/decrease",
  (data, thunkAPI) => {
    // dispatch and async usage
    setTimeout(
      () => thunkAPI.dispatch(counterSlice.actions.decrease(data)),
      1000
    );
  }
);
