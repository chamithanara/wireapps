import { Product } from '@src/features/productList/api/productList.api.types';

export type CartItem = {
    product: Product;
    color: string;
    size: number;
    quantity: number;
};
