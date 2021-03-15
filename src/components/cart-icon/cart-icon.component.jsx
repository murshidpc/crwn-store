import React from 'react';
import { createStructuredSelector } from 'reselect'
import { ReactComponent as CartSvg } from '../../assets/cart.svg';

import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartHidden, TotalCartItems}) => (
    <div className='cart-icon' onClick = {toggleCartHidden}>
        <CartSvg className='shopping-icon'/>
        <span className='item-count'>{TotalCartItems}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    TotalCartItems : selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);