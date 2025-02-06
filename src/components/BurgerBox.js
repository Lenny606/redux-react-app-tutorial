import React from 'react'
import {connect} from "react-redux";
import {orderBurger} from "./redux/burger/BurgerActions";

function BurgerBox(props) {
    return (

            <div className={'container'}>
                <h2 className={'title'}>
                    Number of burgers - {props.burger.burgerBase}
                </h2>
                <button onClick={props.burger.orderBurger} className={'btn'}>
                    Order Burger
                </button>
            </div>
    )
}
const mapStateToProps = (state) => {
    return {
        burgerBase: state.burgerBase
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        orderBurger: () => dispatch(orderBurger())
    }
}

//add mappings to component
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox)
