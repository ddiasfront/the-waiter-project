import {combineReducers} from 'redux'
import orderReducer from './orderReducer'

const allReducers = combineReducers({
    orderReducer: orderReducer
})

export default allReducers