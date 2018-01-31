import * as types from './types.js';

export const incrementFunction = (num) => {
  return function (dispatch){
    dispatch({
      type: types.INCREMENT,
      payload: num + 1
    })
  }

}
