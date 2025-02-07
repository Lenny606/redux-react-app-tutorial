//state + action

import {FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS} from "./ProductTypes";

const initState = {
    loading: false,
    products: [],
    error: false
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
               ...state,
                loading: true,
                error: false
            }
        case FETCH_SUCCESS:
            return {
               ...state,
                loading: false,
                products: action.payload
            }
        case FETCH_ERROR:
            return {
               ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default productReducer;