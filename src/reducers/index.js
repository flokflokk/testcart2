import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'
import products from './products'
import cartReducer from './cart'


export default history =>
  combineReducers({
    router: connectRouter(history),
    form,
    products,
    cartReducer
  })