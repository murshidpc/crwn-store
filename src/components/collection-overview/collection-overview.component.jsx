import React from 'react';
import { connect } from 'react-redux';

import './collection-overview.style.scss';

import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsInArray } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection.preview.component';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollectionsInArray
})

export default connect(mapStateToProps)(CollectionOverview);