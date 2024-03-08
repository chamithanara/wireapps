import { takeLatest } from 'typed-redux-saga';
import { ProductListActions } from '../redux/productList.slice';
import { requestProductListSaga } from './productList.saga';

export const productListSagas = [
    takeLatest(ProductListActions.requestProductList.type, requestProductListSaga)
];
