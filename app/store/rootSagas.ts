import { productListSagas } from '@src/features/productList/saga';

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([...productListSagas]);
}
