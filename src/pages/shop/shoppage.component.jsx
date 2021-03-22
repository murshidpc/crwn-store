import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import { updateCollection } from '../../redux/shop/shop.action';
 
//scss
import './shoppage.style.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../components/collection/collection.component';
import { firestore, convertCollectionToObject } from '../../utils/firebase.utils';

const ShopPage = ({ match, updateCollections }) => {
    useEffect(() => {
        console.log('hello')
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapShot => {
            const collectionMap =  convertCollectionToObject(snapShot);
            updateCollections(collectionMap)
        })
    },[])
    return (
        <div className="shop">
            <Route exact path={`${ match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

const mapDispatchToStates = (dispatch) => ({
    updateCollections : collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null,mapDispatchToStates)(ShopPage);