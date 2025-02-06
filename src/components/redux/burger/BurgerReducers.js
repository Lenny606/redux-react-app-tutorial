//state + action
import {ORDER_BURGER} from "./BurgerTypes";

const initState = {
    burgerBase: 500
}

const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case ORDER_BURGER:
            return {
                ...state,
                burgerBase: state.burgerBase - 1
            }
        default:
            return state
    }
}

export default burgerReducer;