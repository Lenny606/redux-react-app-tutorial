import {combineReducers} from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";
import productReducer from "./products/ProductReducers";

export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer,
    product: productReducer
})