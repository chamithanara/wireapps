import { RootState } from '@app/store';
import { Product } from '../api/productList.api.types';

export const productsListSelector = (state: RootState): Product[] =>
    state.general.productList.landing.productsList;
