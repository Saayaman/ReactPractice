import * as types from './types.js'

const initialState = {
  num: 0,
  status: 'idle'
}

const changeNum = (state = initialState, action) => {
  switch (action.type){
    case types.INCREMENT:
      return {
        num: action.pay,
        status: types.INCREMENT
      }
    case types.DECREMENT:
      return {
        num: action.pay,
        status: types.DECREMENT
      }
      default:
      return state

  }
}

export default changeNum
