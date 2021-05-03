import React, { useState } from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import s from "../Products.module.scss"

import { useGetProducts } from "../../customHooks/useGetProducts"

import addProductIcon from "../../img/products/add-product-icon.png"
import removeProductIcon from "../../img/products/remove-product-with-cart.png"

import { addProductInCart, removeProductInCart } from "../../actions/actions"

const SameProducts = ({ targetSort, productsInCart }) => {
    const host = "https://morgan-shop.herokuapp.com/"
    const dispatch = useDispatch()
    let [productsFromHook] = useGetProducts()

    // add/remove product to/whith cart
    const addProductToCart = (e) => {
        let targetProduct = productsFromHook.find((prod) => prod.id === e.target.id)
        dispatch(addProductInCart(targetProduct))
    }

    const removeProductWithCart = (e) => {
        dispatch(removeProductInCart(e.target.id))
    }
    // add/remove product to/whith cart


    // cart
    const prodInCart = (id) => (
        productsInCart.find((prod) => id === prod.id)
    )
    // cart


    // show more
    const [amountShowProd, setAmountShowProd] = useState(4)
    // show more

    const openNewProduct = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <>
            <div className={s.Products}>
                {productsFromHook &&
                    productsFromHook.map(({ id, categoryId, name, alias, price, image, timeStamp }, index) => (

                        (amountShowProd > index) ? (
                            <div key={id} className={s["Products-Product"] + " " + s.Product} styles={{ display: (amountShowProd > index) ? "block" : "none" }}>
                                <div onClick={openNewProduct}>
                                    <Link to={"/product/" + id}><img className={s["Product-Img"]} src={host + image} alt={name} /></Link>
                                </div>
                                <Link onClick={openNewProduct} to={"/product/" + id} className={s["Product-Name"]}><span>{alias}</span></Link>
                                <span className={s["Product-Price"]}>{"£" + price + ".00"}</span>
                                <img id={id} onClick={(prodInCart(id)) ? removeProductWithCart : addProductToCart} className={s["Product-AddProductIcon"]}
                                    src={(prodInCart(id)) ? removeProductIcon : addProductIcon} alt="icon" />
                            </div>) : null
                    ))
                }
            </div>

            {productsFromHook &&
                amountShowProd < productsFromHook.length
                ? <div onClick={() => setAmountShowProd((prevValue) => prevValue + 4)} className={s["Product-ShowMoreBtn"]}> Show more</div>
                : null
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    targetSort: state.sortMethod.methodSort,
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(SameProducts)



