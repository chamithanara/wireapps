import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';

export interface ProductListState {
    landing: {
        landingSummary: [];
    };
    details: {
        productId: number;
        loading: boolean;
        productSummary: [];
    };
}

export const initialState: ProductListState = {
    landing: {
        landingSummary: []
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
        resetProductDetails: (state: ProductListState) => {
            state.details = initialState.details;
        },

        resetProductList: () => initialState
    }
});

const ProductListSagaActions = {
    /* drillSagaActions must never be same as DrillSlice.actions.
     * This is because, Saga runner will confuse the saga action with the slice action and call both actions at the same time.
     * This will result a loop and crash the app.
     */
    requestProductListLanding: createAction('ProductList/Landing/RequestProductListLanding'),
    requestProductDetails: createAction<{ id: string | number }>(
        'ProductList/Landing/RequestProductDetails'
    )
};

export const ProductListActions = {
    ...ProductListSlice.actions,
    ...ProductListSagaActions
};
export default ProductListSlice.reducer;
