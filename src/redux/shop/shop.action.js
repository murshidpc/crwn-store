import shopActionTypes from './shop.types';

export const updateCollection = (collections) => ({
    type : shopActionTypes.UPDATE_COLLECTION,
    payload : collections
})