import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import filterSlice from './filterSlice'
import productSlice from './productSlice'
import allProducts from './allProducts'


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter : filterSlice,
        products : productSlice,
        allproducts: allProducts
    },
})
export default store