import {ADD_NEW_ORDER, ADD_NEW_ITEM, ADD_NEW_ITEM_TO_ORDER} from '../actions/order/actionTypes'

const initialState = {
    orders: [],
    newItem: {},
    todo: null
}

const orderReducer = (state = initialState,  action) => {
    switch(action.type){
        case ADD_NEW_ITEM_TO_ORDER: 
        return {
            ...state,
            anything: state.orders.length > 0 ? 'above0' : state.orders.map((item) => {
                return item
            })
            }
        case ADD_NEW_ORDER: 
        return {
            ...state, 
            orders: [...state.orders, action.order]
        }
        case ADD_NEW_ITEM:
            return {
                ...state,
                newItem: action.newItem
            }
        default:
        return state
    }
}

export default orderReducer