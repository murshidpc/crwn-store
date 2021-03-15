import CART_TYPES from './cart.types';
import { addItemToCart, removeItemFromCart, removeItem } from './cart.utils';

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_TYPES.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden
            }
        case CART_TYPES.ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }  
        case CART_TYPES.REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItem(state.cartItems, action.payload)
            }      
        case CART_TYPES.CLEAR_CART_ITEM : 
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems, action.payload)
            }        
        default :
            return state;    

    }
}

export default cartReducer;