import { combineReducers } from '@reduxjs/toolkit';
import ProductListSlice from '@src/features/productList/redux/productList.slice';
import CartSlice from '@src/features/cart/redux/cart.slice';
import HomeSlice from '@src/features/home/redux/home.slice';

const appReducer = combineReducers({
    home: HomeSlice,
    productList: ProductListSlice,
    cart: CartSlice
});

export default appReducer;
