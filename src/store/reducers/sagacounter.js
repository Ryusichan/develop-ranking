import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
const INCREASESAGA = 'INCREASESAGA';
const DECREASESAGA = 'DECREASESAGA';
const INCREASE_SAGA_ASYNC = 'INCREASE_SAGA_ASYNC';
const DECREASE_SAGA_ASYNC = 'DECREASE_SAGA_ASYNC';

export const sagaincrease = () => {
  return { type: INCREASESAGA };
};
export const sagadecrease = () => ({ type: DECREASESAGA });

export const sagaincreaseAsync = () => ({ type: INCREASE_SAGA_ASYNC });

export const sagadecreaseAsync = () => ({ type: DECREASE_SAGA_ASYNC });

export function* increaseSaga() {
  yield delay(2000); // 2초를 기다립니다
  yield put(sagaincrease()); //put은 특정 액션을 디스패치 해줍니다.
}

export function* decreaseSaga() {
  yield delay(2000); // 1초를 기다립니다.
  yield put(sagadecrease()); //put은 특정 액션을 디스패치 해줍니다.
}

export function* counterSaga() {
  yield takeEvery(INCREASE_SAGA_ASYNC, INCREASESAGA); // 모든 increase
  yield takeLatest(DECREASE_SAGA_ASYNC, DECREASESAGA);
}

const initialState = 0;

export default function sagacounter(state = initialState, action) {
  switch (action.type) {
    case INCREASESAGA:
      return state + 1;
    case DECREASESAGA:
      return state - 1;
    default:
      return state;
  }
}
