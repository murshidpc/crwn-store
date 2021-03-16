import React from 'react';
import { Route } from 'react-router-dom'

//scss
import './shoppage.style.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../components/collection/collection.component';

const ShopPage = ({ match }) => {
    return (
        <div className="shop">
            <Route exact path={`${ match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;