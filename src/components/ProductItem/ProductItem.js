import React, { useEffect, useState } from "react"

import { useGetProducts } from "../../customHooks/useGetProducts"
import s from "./ProductItem.module.scss"

import { useParams } from "react-router-dom"

import { connect, useDispatch } from "react-redux"
import { addProductInCart, removeProductInCart } from "../../actions/actions"
import SameProducts from "../SameProducts/SameProducts"

const ProductsItem = ({ productsInCart }) => {
    const host = "https://morgan-shop.herokuapp.com/"
    const tempId = GetTempId()
    const dispatch = useDispatch()

    // interaction with cart
    const addProductToCart = (e) => {
        dispatch(addProductInCart(products[targetIndex]))
    }

    const removeProductWithCart = () => {
        dispatch(removeProductInCart(products[targetIndex].id))
    }

    const prodInCart = (id) => (
        productsInCart.find((prod) => id === prod.id)
    )
    // interaction with cart

    let [products] = useGetProducts()
    let targetIndex;
    if (products) {
        targetIndex = products.findIndex((prod) => prod.id === tempId.toString())
    }

    return (
        <>

            {products &&
                <div key={products[targetIndex].id} className={s["ProductItem-Container"]}>
                    <div>
                        <img className={s["ProductItem-Img"]} src={host + products[targetIndex].image}
                            alt={products[targetIndex].name} />
                        <div className={s["ProductItem-Btn"]}
                            onClick={(prodInCart(products[targetIndex].id)) ? removeProductWithCart : addProductToCart}
                        >
                            {(prodInCart(products[targetIndex].id)) ? "Remove product from cart" : "Add product to cart"}
                        </div>
                    </div>

                    <div className={s["ProductItem-Info"]}>
                        <span className={s["ProductItem-Name"]}>{products[targetIndex].alias}</span>
                        <span className={s["ProductItem-Price"]}>{"£" + products[targetIndex].price + ".00"}</span>

                        <div className={s["ProductItem-DecorLine"]}></div>

                        <p className={s["ProductItem-Text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita magnam velit consequuntur cumque
                        aliquid at, unde sint sapiente molestiae</p>
                        <p className={s["ProductItem-Text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita magnam  sit amet consectetur adipisicing elit velit consequuntur cumque
                        aliquid at, unde sint sapiente molestiae</p>
                        <p className={s["ProductItem-Text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita magnam  si amet consecteit. Sequi expedita magtur adipisicing elit. Sequi expedita magnam  sitt amet consectetur adipisicing elit velit consequuntur cumque
                        aliquid at, unde sint sapiente molestiae</p>
                    </div>
                </div>
            }

            <h2 className={s["ProductItem-Title"]}>Similar products</h2>
            <SameProducts />

        </>
    )
}

function GetTempId() {
    let { id } = useParams();
    return id
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(ProductsItem)