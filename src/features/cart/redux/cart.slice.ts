import { createAction, createSlice } from '@reduxjs/toolkit';

export interface CartState {
    cart: [];
}

export const initialState: CartState = {
    cart: []
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: () => initialState
    }
});

const CartSagaActions = {
    /* drillSagaActions must never be same as DrillSlice.actions.
     * This is because, Saga runner will confuse the saga action with the slice action and call both actions at the same time.
     * This will result a loop and crash the app.
     */
    requestCart: createAction('Cart/Landing/RequestCart')
};

export const CartActions = {
    ...CartSlice.actions,
    ...CartSagaActions
};
export default CartSlice.reducer;
