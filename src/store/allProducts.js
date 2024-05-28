import { createSlice } from '@reduxjs/toolkit';

const storedAllProducts = JSON.parse(localStorage.getItem('product')) || [];

const allProduct = createSlice({
    name: 'allproducts',  // all products
    initialState: storedAllProducts ,     // The initial state
    reducers: {
    },
});

// Export the generated action creators and reducer
// export const { } = product.actions;
export default allProduct.reducer;