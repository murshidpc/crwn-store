import shopActionTypes from './shop.types';
import { firestore, convertCollectionToObject } from '../../utils/firebase.utils';

export const fetchCollectionStart = () => ({
    type : shopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collectionMap => ({
    type : shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload : collectionMap
})

export const fetchCollectionFailure = errorMessage => ({
    type : shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload : errorMessage
})

export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then(snapShot => {
            const collectionMap =  convertCollectionToObject(snapShot);
            dispatch(fetchCollectionSuccess(collectionMap));
        }).catch(error => {
            dispatch(fetchCollectionFailure(error.message))
        })
    }
}