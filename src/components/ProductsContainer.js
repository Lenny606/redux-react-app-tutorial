import {connect} from "react-redux";
import {fetchProducts, orderPizza} from "./redux";
import {useEffect, useState} from "react";

function ProductsContainer({productsData, fetchProducts}) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchProducts()
    }, []);


    return (
        <div className={'container'}>
            {
                productsData.loading && <p>Loading...</p>
            }
            {
                productsData.products && <p>{productsData.products.map(t => <p>{t}</p>)}</p>
            }
            {
            productsData.error && <p>{productsData.error}</p>
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
