import { CartItem } from '@src/features/cart/constants/cart.types';
import { RootState } from '@app/store';

export const cartListSelector = (state: RootState): CartItem[] => state.secured.cartItems;
export const cartListCountSelector = (state: RootState): number => {
    const values = state.secured.cartItems.map(item => item.quantity);
    return values.length > 0 ? values.reduce((a, b) => a + b) : 0;
};
export const cartListTotalSelector = (state: RootState): string => {
    const values = state.secured.cartItems.map(item => item.quantity * item.product.price.amount);
    return values.length > 0 ? values.reduce((a, b) => a + b).toFixed(2) : '';
};
