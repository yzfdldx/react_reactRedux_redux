export const ACTION_INCREMENT = "INCREMENT";

export const ACTION_DECREMENT = 'DECREMENT';

// (previousState, action) => newState

export const addOneAction = (count) => {
    return {
        type: ACTION_INCREMENT,
        count: count
    }
}

export const decreOneAction = (count) => {
  return {
    type: ACTION_DECREMENT,
    count: count
  }
}

export const asyncAddOneAction = (count) => {
  return (dispatch, getState) => {
    setTimeout(()=>{
      dispatch(addOneAction(count));
    }, 2000);
  }
}
