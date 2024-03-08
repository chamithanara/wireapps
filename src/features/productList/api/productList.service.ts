import { ProductListResponse } from './productList.api.types';
import ProductListApi from './productList.api';

const ProductListService = {
    requestProductsListService: async (): Promise<ProductListResponse> => {
        try {
            return await ProductListApi.requestProductsAPI();
        } catch (error) {
            return Promise.reject(error);
        }
    }
};

export default ProductListService;
