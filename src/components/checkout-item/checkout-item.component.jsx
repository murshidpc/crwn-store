import React from 'react';

import {connect} from 'react-redux';
import { addItem, clearItem, removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckOutItem = ({item, removeItemFromCart, removeItem, addItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt={`img-${item.name}`} />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
            <span className='value'>{item.quantity}</span>                
            <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className='price'>{item.price}</span>
        <div className='remove-button'
            onClick = { () => removeItemFromCart(item)}
        >
            &#10005;
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart : (item) => dispatch(clearItem(item)),
    removeItem : (item) => dispatch(removeItem(item)),
    addItem : (item) => dispatch(addItem(item))
})



export default connect(null,mapDispatchToProps)(CheckOutItem);