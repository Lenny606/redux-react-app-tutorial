//state + action
import {ORDER_PIZZA} from "./PizzaTypes";

const initState = {
    pizzaBase: 1000
}

const pizzaReducer = (state = initState, action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase - 1
            }
        default:
            return state
    }
}

export default pizzaReducer;