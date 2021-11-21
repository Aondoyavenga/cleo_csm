import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productError: null
}

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) =>{
            state.products = action.payload
        },
    },
})

export const { setProducts } = productsSlice.actions

export const selectProducts = (state) => state.product.products;

export default productsSlice.reducer