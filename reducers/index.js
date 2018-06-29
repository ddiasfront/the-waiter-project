import {combineReducers} from 'redux'
import orderReducer from './orderReducer'
import codeReducer from './codeReducer'

const allReducers = combineReducers({
    orderReducer: orderReducer,
    codeReducer: codeReducer
})

export default allReducers