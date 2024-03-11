import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

import { Product } from '../api/product.api.types';

export interface ProductState {
    landing: {
        loading: boolean;
        productsList: Product[];
    };
    details: {
        productId: number;
        loading: boolean;
        productSummary: [];
    };
}

export const initialState: ProductState = {
    landing: {
        loading: false,
        productsList: []
    },
    details: {
        productId: 0,
        loading: false,
        productSummary: []
    }
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        storeProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
            state.landing.productsList = action.payload;
        },
        setProductsLoading: (state: ProductState, action: PayloadAction<boolean>) => {
            state.landing.loading = action.payload;
        },
        resetProductDetails: (state: ProductState) => {
            state.details = initialState.details;
        },
        resetProduct: () => initialState
    }
});

const ProductSagaActions = {
    requestProduct: createAction('Product/Landing/RequestProduct'),
    requestProductDetails: createAction<{ id: string | number }>(
        'Product/Landing/RequestProductDetails'
    )
};

export const ProductActions = {
    ...ProductSlice.actions,
    ...ProductSagaActions
};
export default ProductSlice.reducer;
