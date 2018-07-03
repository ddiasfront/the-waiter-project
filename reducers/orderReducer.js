import {ADD_NEW_ORDER, ADD_NEW_ITEM, ADD_NEW_ITEM_TO_ORDER, UPDATE_ITEM} from '../actions/order/actionTypes'

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
            orders: [
                ...state.orders.slice(0, state.orders.length),
                action.order,
                ...state.orders.slice(state.orders.length)
            ]
            
        }
        case ADD_NEW_ITEM:
            return {
                ...state,
                newItem: action.newItem
            }
        case UPDATE_ITEM:
            return {
                orders:  state.orders.map((item) => {
                    if (item.Name !== action.itemUpdate.Name) {
                        return item
                    }
                    return {
                        ...item,
                        ...action.itemUpdate
                    }
                })
            }
        default:
        return state
    }
}

export default orderReducer