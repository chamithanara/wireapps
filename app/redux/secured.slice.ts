import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CartItem } from '@src/features/cart/constants/cart.types';

export interface SecuredState {
    cartItems: CartItem[];
}

export const initialState: SecuredState = {
    cartItems: []
};

const SecuredSlice = createSlice({
    name: 'secureSlice',
    initialState,
    reducers: {
        addToCart: (state: SecuredState, action: PayloadAction<CartItem>) => {
            const productId = action.payload.product.id;
            const indexes: number[] = [];

            state.cartItems.forEach((item, index) =>
                item.product.id === productId ? indexes.push(index) : null
            );

            if (indexes.length > 0) {
                let itemExists = false;
                indexes.forEach(index => {
                    if (
                        state.cartItems[index].color === action.payload.color &&
                        state.cartItems[index].size === action.payload.size
                    ) {
                        state.cartItems[index].quantity += 1;
                        itemExists = true;
                    }
                });

                if (!itemExists) {
                    state.cartItems = [...state.cartItems, action.payload];
                }
            } else {
                state.cartItems = [...state.cartItems, action.payload];
            }
        },
        removeFromCart: (state: SecuredState, action: PayloadAction<CartItem>) => {
            const productId = action.payload.product.id;
            const indexOfItem = state.cartItems.findIndex(item => item.product.id === productId);
            if (indexOfItem >= 0 && state.cartItems[indexOfItem].quantity > 1) {
                state.cartItems[indexOfItem].quantity -= 1;
            }
        },
        removeAllFromCart: (state: SecuredState, action: PayloadAction<CartItem>) => {
            const productId = action.payload.product.id;
            const indexOfItem = state.cartItems.findIndex(item => item.product.id === productId);
            if (indexOfItem >= 0) {
                const cartItemsTemp = state.cartItems;
                cartItemsTemp.splice(indexOfItem, 1);
                state.cartItems = cartItemsTemp;
            }
        },
        resetCart: () => initialState
    }
});

export const SecuredActions = {
    ...SecuredSlice.actions
};

export default SecuredSlice.reducer;
