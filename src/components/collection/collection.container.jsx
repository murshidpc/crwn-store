import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import collectionPage from './collection.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector'
import WithSpinner from '../withSpinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionLoaded(state)
});

const collectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionPage);

export default collectionPageContainer;
