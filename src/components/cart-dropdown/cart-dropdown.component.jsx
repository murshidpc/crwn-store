import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { useHistory } from 'react-router-dom';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems, dispatch}) => {
    const history = useHistory();
    return(
        <div className='cart-dropdown'>
            <div  className='cart-items'>
                { cartItems.length ? 
                (cartItems.map( cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />)) :
                    (<span className='error-message'>Your cart is empty </span>)}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT                
                </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);