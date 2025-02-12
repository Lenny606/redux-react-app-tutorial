import React, {useState} from 'react'
import {createContext} from "react";
import {orderPizza} from "./redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {storeToolkit} from "./redux-toolkit/store";
import {pizzaSlice} from "./redux-toolkit/pizza/pizzaSlice";
import {burgerSlice} from "./redux-toolkit/burger/burgerSlice";


function PizzaBox(props) {

   const pizzaBaseRT =  useSelector((state) => {
        return state.pizza.pizzaBase;
    })

    const dispatch =useDispatch()

    const initState = storeToolkit.getState();
    const actionPizza  = pizzaSlice.actions.pizza_order
    const actionBurger  = burgerSlice.actions.burger_order
    const [number, setNumber] = useState(1)
    return (

        <div className={'container'}>
            <h2 className={'title'}>
                Number of pizzas - {pizzaBaseRT}
            </h2>
            <input type={"text"} value={number} onChange={e => setNumber(Number(e.target.value))}/>
            <button onClick={() => dispatch(pizzaSlice.actions.customer_choise(number))} className={'btn'}>
                Customer Choice
            </button>
            <button onClick={() => storeToolkit.dispatch(actionPizza)} className={'btn'}>
                Order Pizza
            </button>
            <button onClick={() => dispatch(actionPizza)} className={'btn'}>
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
