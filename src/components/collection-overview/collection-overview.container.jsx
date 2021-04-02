import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import withSpinner from '../withSpinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
    isLoading : state => selectIsCollectionFetching(state)
})

const collectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview)

export default collectionOverviewContainer;