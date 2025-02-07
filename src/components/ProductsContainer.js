import {useDispatch, useSelector} from "react-redux";
import {orderPizza} from "./redux";

function ProductsContainer() {
    //newer pattern without connect()
    const pizzaBase = useSelector(state => state.pizzaBase)
    const dispatch = useDispatch()
    return (
            <div className={'container'}>
                <h2 className={'title'}>
                    Number of pizzas - {pizzaBase}
                </h2>
                <button className={'btn'} onClick={() => dispatch(orderPizza())}>
                    Order Pizza
                </button>
            </div>
    )
}
export default ProductsContainer
