import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";

export const store = configureStore({
    reducer: {
        product: productsReducer
    }
})