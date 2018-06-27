import {ADD_NEW_ORDER} from './actionTypes'

export const addNewOrder = (order) => {
    console.log(order)
    return {
        type: ADD_NEW_ORDER,
        order: order
    }
}