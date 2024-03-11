import { takeLatest } from 'typed-redux-saga';

import { ProductActions } from '../redux/product.slice';
import { requestProductsSaga } from './product.saga';

export const productSagas = [takeLatest(ProductActions.requestProduct.type, requestProductsSaga)];
