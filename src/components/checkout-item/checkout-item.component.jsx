import React from 'react';

import {connect} from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckOutItem = ({item, removeItemFromCart}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt={`img-${item.name}`} />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>{item.quantity}</span>
        <span className='price'>{item.price}</span>
        <div className='remove-button'
            onClick = { () => removeItemFromCart(item)}
        >
            &#10005;
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart : (item) => dispatch(removeItem(item))
})



export default connect(null,mapDispatchToProps)(CheckOutItem);