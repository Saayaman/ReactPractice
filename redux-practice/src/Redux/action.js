import * as types from './types.js';

export const incrementFunction = (num) => {
  return function (dispatch){
    dispatch({
      type: types.INCREMENT,
    })
  }

}


export const decrementFunction = (num) => {
  return function (dispatch){
    dispatch({
      type: types.DECREMENT,
    })
  }

}
