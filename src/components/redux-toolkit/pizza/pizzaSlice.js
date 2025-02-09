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
        }
    }

});