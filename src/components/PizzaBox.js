import React from 'react'
import {createContext} from "react";
import {orderPizza} from "./redux";
import {connect} from "react-redux";

const Data = createContext()

function PizzaBox(props) {
    return (

        <Data.Provider value={{name: 'John Doe'}}>
            <div className={'container'}>
                <h2 className={'title'}>
                    Number of pizzas - {props.pizza.pizzaBase}
                </h2>
                <button onClick={props.pizza.orderPizza} className={'btn'}>
                    Order Pizza
                </button>
            </div>
            {/*<Pizza/>*/}

        </Data.Provider>
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
