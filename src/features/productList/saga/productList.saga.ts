import { call, put } from 'typed-redux-saga';
import LoggingService from '@src/services/logs.service';

import { ProductListActions } from '../redux/productList.slice';
import ProductListService from '../api/productList.service';

export function* requestProductListSaga() {
    try {
        yield* put(ProductListActions.setProductsLoading(true));
        const response = yield* call(ProductListService.requestProductsListService);
        yield* put(ProductListActions.storeProducts(response.data));
        yield* put(ProductListActions.setProductsLoading(false));
    } catch (error) {
        yield* put(ProductListActions.setProductsLoading(false));
        LoggingService.debug('error', error);
    }
}
