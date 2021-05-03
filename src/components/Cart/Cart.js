import React from "react"
import { connect } from "react-redux"

import EmptyCart from "./EmptyCart/EmptyCart"

import s from "./Cart.module.scss"

import ProductsInCart from "./ProductsInCart/ProductsInCart"

const Cart = ({ productsInCart }) => {


    return (
        <div className={s.Cart}>
            <h1 className={s["Cart-Title"]}>basket</h1>

            {productsInCart.length > 0
                ? <ProductsInCart />
                : <EmptyCart />
            }

        </div >
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(Cart)