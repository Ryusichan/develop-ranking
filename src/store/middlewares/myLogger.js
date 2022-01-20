//custom middleware 사용방법
// 작동방법만 이기고 사실 사용은 안함
const myLogger = store => next => action => {
  // console.log(action);
  if (action.type === 'INCREASE') {
    // console.log('특정조건');
  }

  // console.log('/t', store.getState());

  const result = next(action);

  // console.log('/t', store.getState());

  return result;
};

export default myLogger;
