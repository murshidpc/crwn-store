import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//selectors
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


import './checkout.style.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div> 
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        { cartItems.map(cartItem => 
            <CheckOutItem key={cartItem.id} item={cartItem} />
        )}
        <div className='total'>
            <span>${total}</span>
        </div>
        <StripeCheckoutButton price={total} />
    </div>  
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
}) 

export default connect(mapStateToProps)(CheckoutPage);