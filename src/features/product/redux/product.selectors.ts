import { RootState } from '@app/store';
import { Product } from '../api/product.api.types';

export const productSelector = (state: RootState): Product[] =>
    state.general.product.landing.productsList;
export const productLoading = (state: RootState): boolean => state.general.product.landing.loading;
