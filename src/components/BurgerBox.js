import React, {useState} from 'react'
import {connect} from "react-redux";
import {orderBurger} from "./redux/burger/BurgerActions";

function BurgerBox(props) {

    const [number, setNumber] = useState(1)

    return (

            <div className={'container'}>
                <h2 className={'title'}>
                    Number of burgers - {props.burger.burgerBase}
                </h2>
                <input type={"text"} placeholder={'enter number'} value={number} onChange={(e) => setNumber(e.target.value)}/>
                <button onClick={() => props.burger.orderBurger(number)} className={'btn'}>
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
        orderBurger: (number) => dispatch(orderBurger(number))
    }
}

//add mappings to component
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox)
