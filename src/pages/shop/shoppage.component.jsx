import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
 
import { fetchCollectionStartAsync } from '../../redux/shop/shop.action';
 
//scss
import './shoppage.style.scss';

import collectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
// const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
// render={(props)=> <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} 
import collectionPageContainer from '../../components/collection/collection.container';

const ShopPage = ({ match, fetchCollectionStartAsync }) => {
    useEffect(()=>{
        fetchCollectionStartAsync();
    },[fetchCollectionStartAsync])

    return (
        <div className="shop">
            <Route exact path={`${ match.path}`} component={collectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={collectionPageContainer} />
        </div>
    )
}

const mapDispatchToStates = (dispatch) => ({
    fetchCollectionStartAsync : () => dispatch(fetchCollectionStartAsync())
})

export default connect(null,mapDispatchToStates)(ShopPage);