import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../api/productList.api.types';

export interface ProductListState {
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

export const initialState: ProductListState = {
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

const ProductListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        storeProducts: (state: ProductListState, action: PayloadAction<Product[]>) => {
            state.landing.productsList = action.payload;
        },
        setProductsLoading: (state: ProductListState, action: PayloadAction<boolean>) => {
            state.landing.loading = action.payload;
        },
        resetProductDetails: (state: ProductListState) => {
            state.details = initialState.details;
        },
        resetProductList: () => initialState
    }
});

const ProductListSagaActions = {
    requestProductList: createAction('ProductList/Landing/RequestProductList'),
    requestProductDetails: createAction<{ id: string | number }>(
        'ProductList/Landing/RequestProductDetails'
    )
};

export const ProductListActions = {
    ...ProductListSlice.actions,
    ...ProductListSagaActions
};
export default ProductListSlice.reducer;
