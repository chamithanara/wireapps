import BaseApi from '@app/api/baseApi';
import { PRODUCTS_ENDPOINT } from '../constants/product.apiEndpoints';
import { ProductResponse } from './product.api.types';

class ProductApi extends BaseApi {
    requestProductsAPI(): Promise<ProductResponse> {
        return this.getAsync<ProductResponse>(PRODUCTS_ENDPOINT);
    }
}

export default new ProductApi();
