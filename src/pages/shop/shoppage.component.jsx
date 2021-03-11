import React from 'react';

import  SHOP_DATA  from "./shop.data";
//scss
import './shoppage.style.scss';

import CollectionPreview from '../../components/collection-preview/collection.preview.component';


const ShopPage = () => {
    return (
        <div className="shop">
            {SHOP_DATA.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default ShopPage;