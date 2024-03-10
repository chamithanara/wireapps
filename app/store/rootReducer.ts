import { combineReducers } from '@reduxjs/toolkit';
import ProductListSlice from '@src/features/productList/redux/productList.slice';
import HomeSlice from '@src/features/home/redux/home.slice';

const appReducer = combineReducers({
    home: HomeSlice,
    productList: ProductListSlice
});

export default appReducer;
