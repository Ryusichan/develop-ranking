import { combineReducers } from "redux";

import toggleSlice from "./toggleSlice";
// import postSlice from "./postSlice";
// import { all } from "redux-saga/effects";
// import sagaCounter, { counterSaga } from "./sagacounter";

const rootReducer = combineReducers({
  toggles: toggleSlice.reducer,
});

// export function* rootSaga() {
//   yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
// }

export default rootReducer;
