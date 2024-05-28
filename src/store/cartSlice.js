import { createSlice } from '@reduxjs/toolkit'


const initialState = [];
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add(state, action) {
        //     // Initialize qty to 1 if it's not set
        //     const product = action.payload;
        //     if (!product.qty) {
        //         product.qty = 1;
        //     }
        //     state.push(product);
        // },
        add(state, action) {
            // Create a new object based on the action.payload
            const product = { ...action.payload, qty: 1 };
            state.push(product);
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        changeqty(state, action) {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        qty: action.payload.qty,
                    };
                }
                return item;
            });
        }
    }
})
export const { add, remove, changeqty } = cartSlice.actions
export default cartSlice.reducer