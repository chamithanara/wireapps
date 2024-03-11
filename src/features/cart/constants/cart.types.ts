import { Product } from '@src/features/product/api/product.api.types';

export type CartItem = {
    product: Product;
    color: string;
    size: number;
    quantity: number;
};
