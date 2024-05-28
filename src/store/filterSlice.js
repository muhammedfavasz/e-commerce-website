import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    gender: false,
};
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        byPrice(state, action) {
            state.sort = action.payload;
        },
        byStock(state, action) {
            state.byStock = !state.byStock;
        },
        byFastDelivery(state, action) {
            state.byFastDelivery = !state.byFastDelivery;
        },
        byRating(state, action) {
            state.byRating = action.payload;
        },
        bysearch(state, action) {
            state.searchQuery = action.payload;
        },
        gender(state, action) {
            state.gender = action.payload;
        },
        clear(state, action) {
            state.byStock = false;
            state.byFastDelivery = false;
            state.byRating = 0;
            state.searchQuery = "";
            state.sort = null; // Reset the sorting filter
            state.gender = false;
        }
    }
});

export const { byPrice, byStock, byFastDelivery, byRating, bysearch, clear, gender } = filterSlice.actions
export default filterSlice.reducer
