import { call, put } from 'typed-redux-saga';

import LoggingService from '@services/logs.service';
import { ProductActions } from '../redux/product.slice';
import ProductService from '../api/product.service';

export function* requestProductsSaga() {
    try {
        yield* put(ProductActions.setProductsLoading(true));
        const response = yield* call(ProductService.requestProductsService);
        yield* put(ProductActions.storeProducts(response.data));
        yield* put(ProductActions.setProductsLoading(false));
    } catch (error) {
        yield* put(ProductActions.setProductsLoading(false));
        // Configure BugFender and log error
        LoggingService.debug('error', error);
    }
}
