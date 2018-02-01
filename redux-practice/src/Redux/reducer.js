import * as types from './types.js'

const initialState = {
  num: 0,
  status: 'idle'
}

const changeNum = (state = initialState, action) => {
  switch (action.type){
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state -1;
    default:
      return state

  }
}

export default changeNum
