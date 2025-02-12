import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
//ASYNC THUNK
const initialState = {
    products: [],
    loading: false,
    error: ""
}
export const fetchProductsRT= createAsyncThunk('product/fetchProducts', () => {
    return axios.get('http://fakestoreapi/products').then(
        (res) => res.data.map( data => data.title)
    ).catch((e) => console.log(e.message))
})
export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }

});