import { productListSagas } from '@src/features/productList/saga';
import { cartSagas } from '@src/features/cart/saga';

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([...productListSagas, ...cartSagas]);
}
