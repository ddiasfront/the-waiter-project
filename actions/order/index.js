import {ADD_NEW_ORDER, ADD_NEW_ITEM, ADD_NEW_ITEM_TO_ORDER, UPDATE_ITEM} from './actionTypes'

export const addNewOrder = (order) => {
    return {
        type: ADD_NEW_ORDER,
        order: order
    }
}

export const addNewItem = (newItem) => {
    return {
        type: ADD_NEW_ITEM,
        newItem: newItem
    }
}

export const addNewItemToOrder = () => {
    return {
        type: ADD_NEW_ITEM_TO_ORDER
    }
}


export const updateOrderItem = (itemUpdate) => {
    return {
        type: UPDATE_ITEM,
        itemUpdate
    }
}