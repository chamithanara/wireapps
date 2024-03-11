import { combineReducers } from '@reduxjs/toolkit';

import ProductSlice from '@src/features/product/redux/product.slice';

const appReducer = combineReducers({
    product: ProductSlice
});

export default appReducer;
