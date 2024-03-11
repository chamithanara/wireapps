import { all } from 'redux-saga/effects';

import { productSagas } from '@src/features/product/saga';

export default function* rootSaga() {
    yield all([...productSagas]);
}
