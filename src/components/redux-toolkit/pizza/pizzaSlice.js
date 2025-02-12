import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pizzaBase: 1000
}
export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        //action creator
        pizza_order: (state) => {
            return state.pizzaBase - 1
        },
        customer_choise: (state, action) => {
            state.pizzaBase = state.pizzaBase - action.payload
        }
    }

});