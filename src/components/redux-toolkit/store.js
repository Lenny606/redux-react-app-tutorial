import {pizzaSlice} from "./pizza/pizzaSlice";
import {configureStore} from '@reduxjs/toolkit'

export const storeToolkit = configureStore({
    reducer: {
        pizza: pizzaSlice.reducer,
        // other reducers if needed
    }
});