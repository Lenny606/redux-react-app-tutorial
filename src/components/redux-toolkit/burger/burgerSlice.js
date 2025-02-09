import {createSlice} from '@reduxjs/toolkit'

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
    }

});