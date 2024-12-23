import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/add-cart/addCartSlice"
import productReducer from "./slices/products/productsSlice"

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        products : productReducer,
    },
  })