import { createSlice } from '@reduxjs/toolkit';

const storedProducts = JSON.parse(localStorage.getItem('carousal')) || [];

const product = createSlice({
    name: 'products',  // products
    initialState: storedProducts ,     // The initial state
    reducers: {
    },
});

// Export the generated action creators and reducer
// export const { } = product.actions;
export default product.reducer;