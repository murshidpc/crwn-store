import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import { updateCollection } from '../../redux/shop/shop.action';
 
//scss
import './shoppage.style.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../components/collection/collection.component';
import { firestore, convertCollectionToObject } from '../../utils/firebase.utils';
import WithSpinner from '../../components/withSpinner/with-spinner.component';

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapShot => {
            const collectionMap =  convertCollectionToObject(snapShot);
            updateCollections(collectionMap)
            setLoading(false);
        })
    },[])
    return (
        <div className="shop">
            <Route exact path={`${ match.path}`} render={(props) => <CollectionOverViewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}

const mapDispatchToStates = (dispatch) => ({
    updateCollections : collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null,mapDispatchToStates)(ShopPage);