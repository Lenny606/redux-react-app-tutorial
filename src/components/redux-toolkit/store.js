import {pizzaSlice} from "./pizza/pizzaSlice";
import {configureStore} from '@reduxjs/toolkit'
import {burgerSlice} from "./burger/burgerSlice";

export const storeToolkit = configureStore({
    reducer: {
        pizza: pizzaSlice.reducer,
        burger: burgerSlice.reducer
        // other reducers if needed
    }
});