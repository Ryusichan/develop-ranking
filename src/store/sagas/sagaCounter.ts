import {
  delay,
  all,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import counterSlice from "store/reducers/counterSlice";
// const INCREASESAGA = 'INCREASESAGA';
// const DECREASESAGA = 'DECREASESAGA';
// const INCREASE_SAGA_ASYNC = 'INCREASE_SAGA_ASYNC';
// const DECREASE_SAGA_ASYNC = 'DECREASE_SAGA_ASYNC';

// export const sagaincrease = () => {
//   return { type: INCREASESAGA };
// };
// export const sagadecrease = () => ({ type: DECREASESAGA });

// export const sagaincreaseAsync = () => ({ type: INCREASE_SAGA_ASYNC });

// export const sagadecreaseAsync = () => ({ type: DECREASE_SAGA_ASYNC });

export function* increaseSaga() {
  yield delay(2000); // 2초를 기다립니다
  // yield put(sagaincrease()); //put은 특정 액션을 디스패치 해줍니다.
  yield put(counterSlice.actions.increase);
}

export function* decreaseSaga() {
  yield delay(2000); // 1초를 기다립니다.
  yield put(counterSlice.actions.decrease); //put은 특정 액션을 디스패치 해줍니다.
}

function* watchIncrease() {
  yield takeEvery(counterSlice.actions.increase, function* () {
    console.log("before increase saga activate!");
    yield delay(1000);
    console.log("after increase saga activate!");
    yield put(counterSlice.actions.decrease(3));
  });
}

export function* counterSaga() {
  // yield takeEvery(INCREASE_SAGA_ASYNC, INCREASESAGA); // 모든 increase
  // yield takeLatest(DECREASE_SAGA_ASYNC, DECREASESAGA);
  yield all([fork(watchIncrease)]);
}

// function* watchLogin() {
//   yield takeLatest(LOG_IN, logIn);
// }

// export default function* counterSaga() {
//   yield all([fork(watchLogin)]);
// }
