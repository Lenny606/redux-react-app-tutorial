import {createSlice} from '@reduxjs/toolkit'
import {pizzaSlice} from "../pizza/pizzaSlice"
const initialState = {
    burgerBase: 1000
}
export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        //action creator
        burger_order: (state) => {
            return state.burgerBase - 1
        }
    },
    //for multiple reducers use extraReducer() => if pizza is ordered, 1 burger is free
    extraReducers: (builder) => {
        builder.addCase(pizzaSlice.actions.pizza_order, (state) => {
            return state.burgerBase - 1
        })
    }


});