import BaseApi from '@app/api/baseApi';
import { PRODUCTS_ENDPOINT } from '../constants/productList.apiEndpoints';
import { ProductListResponse } from './productList.api.types';

class ProductListApi extends BaseApi {
    requestProductsAPI(): Promise<ProductListResponse> {
        return this.getAsync<ProductListResponse>(PRODUCTS_ENDPOINT);
    }
}

export default new ProductListApi();
