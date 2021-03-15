import React from 'react';
import { ReactComponent as CartSvg } from '../../assets/cart.svg';

import {connect} from 'react-redux';

import './cart-icon.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick = {toggleCartHidden}>
        <CartSvg className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);