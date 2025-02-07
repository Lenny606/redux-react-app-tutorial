//Action creator

import {FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS} from "./ProductTypes";
import axios from "axios";

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST,
    }
}
export const fetchSuccess = (products) => {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}
export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchProducts = (dispatch) => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get('https://fakestoreapi.com/products').then(
            res => {
                const products = res.data.map(p => p.title)
                dispatch(fetchSuccess(products))
            }

        ).catch(e => {
            console.log(e.message)
            dispatch(fetchError(e))
        })
    }
}