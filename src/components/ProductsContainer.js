import {connect, useDispatch, useSelector} from "react-redux";
import {fetchProducts, orderPizza} from "./redux";
import {useEffect, useState} from "react";
import {fetchProductsRT} from "./redux-toolkit/product/productSlice";

function ProductsContainer({productsData, fetchProducts}) {

    //using Hooks
    // const pData = useSelector(state => this.state.product)
    // const pDispatch = useDispatch()

    useEffect(() => {
        // pDispatch(fetchProducts())
        fetchProducts()
    }, []);

    //ASYNC
    const dispatchRT = useDispatch()
    const product = useSelector(state => state.product)
    useEffect(() => {
        // pDispatch(fetchProducts())
        dispatchRT(fetchProductsRT())
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
            {/* --- ASYNC FROM REDUX TOOLKiT*/}
            <div className={'container'}>
                {
                    product.loading && <p>Loading...</p>
                }
                {
                    product.products && <p>{product.products.map(t => <p>{t}</p>)}</p>
                }
                {
                    product.error && <p>{product.error}</p>
                }
            </div>
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
