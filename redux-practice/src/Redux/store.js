import { createStore } from 'redux';
import {combineReducers} from 'redux'
import changeNum from './reducer.js'

const rootReducer = combineReducers({
  changeNum
})

export default function configureStore (){
  return createStore(rootReducer)
}
