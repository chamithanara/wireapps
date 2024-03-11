import { combineReducers } from '@reduxjs/toolkit';
import ProductListSlice from '@src/features/productList/redux/productList.slice';

const appReducer = combineReducers({
    productList: ProductListSlice
});

export default appReducer;
