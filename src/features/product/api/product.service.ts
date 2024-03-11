import { ProductResponse } from './product.api.types';
import ProductApi from './product.api';

const ProductService = {
    requestProductsService: async (): Promise<ProductResponse> => {
        try {
            return await ProductApi.requestProductsAPI();
        } catch (error) {
            return Promise.reject(error);
        }
    }
};

export default ProductService;
