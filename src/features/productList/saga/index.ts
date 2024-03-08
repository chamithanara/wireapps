import { takeLatest } from 'typed-redux-saga';
import { ProductListActions } from '../redux/productList.slice';
import { requestSaga } from './productList.saga';

export const productListSagas = [
    takeLatest(ProductListActions.requestProductListLanding.type, requestSaga)
];
