import {pizzaSlice} from "./pizza/pizzaSlice";
import {configureStore} from '@reduxjs/toolkit'
import {burgerSlice} from "./burger/burgerSlice";
import {createLogger } from "redux-logger";

const logger = createLogger()
export const storeToolkit = configureStore({
    reducer: {
        pizza: pizzaSlice.reducer,
        burger: burgerSlice.reducer
        // other reducers if needed
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    }
});