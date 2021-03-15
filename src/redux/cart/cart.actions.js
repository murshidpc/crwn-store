import CART_TYPES from './cart.types';

export const toggleCartHidden = () => {
    return {
        type : CART_TYPES.TOGGLE_CART_HIDDEN
    }
}

export const addItem = (item) => {
    return {
        type : CART_TYPES.ADD_ITEM,
        payload : item
    }
}

export const clearItem = (item) => {
    return {
        type : CART_TYPES.CLEAR_CART_ITEM,
        payload : item
    }
}

export const removeItem = (item) => {
    return {
        type : CART_TYPES.REMOVE_ITEM,
        payload : item
    }
}