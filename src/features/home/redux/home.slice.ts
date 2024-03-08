import { createSlice } from '@reduxjs/toolkit';

export interface HomeState {
    isFetching?: boolean;
}

const initialState: HomeState = {
    isFetching: false
};

const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateFetching: (state: HomeState) => {
            state.isFetching = false;
        }
    }
});

export const HomeActions = HomeSlice.actions;
export default HomeSlice.reducer;
