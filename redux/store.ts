import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },})