import { combineReducers } from 'redux'
import user from './user'
import basket from './basket'

const rootReducer = combineReducers({
  user,
  basket
})

export default rootReducer
