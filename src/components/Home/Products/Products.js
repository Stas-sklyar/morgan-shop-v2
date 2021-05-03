import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import s from "../../Products.module.scss"

import { useGetProducts } from "../../../customHooks/useGetProducts"

import addProductIcon from "../../../img/products/add-product-icon.png"
import removeProductIcon from "../../../img/products/remove-product-with-cart.png"

import SortProducts from "../../SortProducts/SortProducts"
import { addProductInCart, removeProductInCart } from "../../../actions/actions"

const Products = ({ targetSort, productsInCart }) => {
    const host = "https://morgan-shop.herokuapp.com/"
    const dispatch = useDispatch()

    // add/remove product to/whith cart
    const addProductToCart = (e) => {
        let targetProduct = productsFromHook.find((prod) => prod.id === e.target.id)
        dispatch(addProductInCart(targetProduct))
    }

    const removeProductWithCart = (e) => {
        dispatch(removeProductInCart(e.target.id))
    }
    // add/remove product to/whith cart


    // sort
    const [methodSort, setMethodSort] = useState(targetSort)
    let [productsFromHook] = useGetProducts()

    if (productsFromHook) {
        if (methodSort === "hightToLow") productsFromHook.sort((a, b) => b.price - a.price)
        else if (methodSort === "lowToHight") productsFromHook.sort((a, b) => a.price - b.price)
        else if (methodSort === "sortNewness") productsFromHook.sort((a, b) => {
            return new Date(a.timeStamp) - new Date(b.timeStamp)
        })
    }

    useEffect(() => {
        setMethodSort(targetSort)
        return () => {
            setMethodSort("")
        }
    }, [targetSort])
    // sort


    // cart
    const prodInCart = (id) => (
        productsInCart.find((prod) => id === prod.id)
    )
    // cart


    // show more
    const [amountShowProd, setAmountShowProd] = useState(12)
    // show more


    return (
        <>
            <SortProducts />
            <div className={s.Products}>
                {productsFromHook &&
                    productsFromHook.map(({ id, categoryId, name, alias, price, image, timeStamp }, index) => (

                        (amountShowProd > index) ? (
                            <div key={id} className={s["Products-Product"] + " " + s.Product} styles={{ display: (amountShowProd > index) ? "block" : "none" }}>
                                <Link to={"/product/" + id}><img className={s["Product-Img"]} src={host + image} alt={name} /></Link>
                                <span className={s["Product-Name"]}>{alias}</span>
                                <span className={s["Product-Price"]}>{"£" + price + ".00"}</span>
                                <img id={id} onClick={(prodInCart(id)) ? removeProductWithCart : addProductToCart} className={s["Product-AddProductIcon"]}
                                    src={(prodInCart(id)) ? removeProductIcon : addProductIcon} alt="icon" />
                            </div>) : null
                    ))
                }
            </div>

            {productsFromHook &&
                amountShowProd < productsFromHook.length
                ? <div onClick={() => setAmountShowProd((prevValue) => prevValue + 8)} className={s["Product-ShowMoreBtn"]}> Show more</div>
                : null
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    targetSort: state.sortMethod.methodSort,
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(Products)



