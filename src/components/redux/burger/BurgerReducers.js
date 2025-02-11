//state + action
import {ORDER_BURGER} from "./BurgerTypes";
import {ORDER_PIZZA} from "../pizza/PizzaTypes";

const initState = {
    burgerBase: 500
}

const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case ORDER_BURGER:
            return {
                ...state,
                burgerBase: state.burgerBase - action.payload.number
            }
        //     case when Pizza is Ordered , 1 Burger is free
        case ORDER_PIZZA:
            return {
                ...state,
                burgerBase: state.burgerBase - 1
            }
        default:
            return state
    }
}

export default burgerReducer;