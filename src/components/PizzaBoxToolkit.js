import React from 'react'
import {createContext} from "react";
import {orderPizza} from "./redux";
import {connect} from "react-redux";
import {storeToolkit} from "./redux-toolkit/store";
import {pizzaSlice} from "./redux-toolkit/pizza/pizzaSlice";


function PizzaBox(props) {

    const initState = storeToolkit.getState();
    const action  = pizzaSlice.actions.pizza_order

    return (

            <div className={'container'}>
                <h2 className={'title'}>
                    Number of pizzas - {}
                </h2>
                <button onClick={() => storeToolkit.dispatch(action)} className={'btn'}>
                    Order Pizza
                </button>
            </div>
    )


}
const mapStateToProps = (state) => {
    return {
        pizzaBase: state.pizzaBase
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        orderPizza: () => dispatch(orderPizza())
    }
}

//add mappings to component
export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox)
