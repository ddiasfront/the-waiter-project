import {ADD_NEW_ORDER} from './orderReducer'

const orderReducer = (orders = [], action) => {
    console.log(action)
    switch(action.type){
        case ADD_NEW_ORDER:
            return [
                ...orders,
                {
                    orders: action.order
                }
            ]
        default:
        return orders
    }
}

export default orderReducer