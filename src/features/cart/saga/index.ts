import { takeLatest } from 'typed-redux-saga';
import { CartActions } from '../redux/cart.slice';
import { requestSaga } from './cart.saga';

export const cartSagas = [takeLatest(CartActions.requestCart.type, requestSaga)];
