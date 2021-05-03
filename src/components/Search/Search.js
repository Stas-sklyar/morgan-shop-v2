import React from "react"
import { useDispatch, useSelector } from "react-redux"

import s from "./Search.module.scss"
import prodStyle from "../Products.module.scss"

import addProductIcon from "../../img/products/add-product-icon.png"
import removeProductIcon from "../../img/products/remove-product-with-cart.png"

import { useGetProducts } from "../../customHooks/useGetProducts"
import { addProductInCart, handleSearchInput, removeProductInCart } from "../../actions/actions"
import { Link } from "react-router-dom"

const Search = () => {
    const host = "https://morgan-shop.herokuapp.com/"
    const dispatch = useDispatch()
    let filteredData
    const tempQuery = useSelector(state => state.search.searchQuery)

    let [productsFromHook] = useGetProducts()
    if (productsFromHook) {
        filteredData = productsFromHook.filter(prod => {
            return prod.alias.toLowerCase().includes(tempQuery.toLowerCase());
        });
    }

    const handleSearch = (e) => {
        dispatch(handleSearchInput(e.target.value))
    }

    // interaction with cart
    const addProductToCart = (e) => {
        let targetProduct = productsFromHook.find((prod) => prod.id === e.target.id)
        dispatch(addProductInCart(targetProduct))
    }

    const removeProductWithCart = (e) => {
        dispatch(removeProductInCart(e.target.id))
    }

    const productsInCart = useSelector(state => state.productsInCart)
    const prodInCart = (id) => (
        productsInCart.find((prod) => id === prod.id)
    )
    // interaction with cart

    return (
        <>
            <div className={s["Search"]}>
                <h3 className={s["Search-Title"]}>Please, enter your request</h3>
                <input onChange={(e) => handleSearch(e)}
                    value={tempQuery}
                    className={s["Search-Input"]}
                    placeholder="Your request" />
            </div>

            <div className={prodStyle.Products}>
                {filteredData &&
                    filteredData
                        .map(({ id, categoryId, name, alias, price, image, timeStamp }, index, array) => {
                            return (
                                <div key={id} className={prodStyle["Products-Product"] + " " + prodStyle.Product}>
                                    <Link to={"/product/" + id}><img className={prodStyle["Product-Img"]} src={host + image} alt={name} /></Link>
                                    <Link to={"/product/" + id} className={prodStyle["Product-Name"]}><span>{name}</span></Link>
                                    <span className={prodStyle["Product-Price"]}>{"£" + price + ".00"}</span>
                                    <img id={id} onClick={(prodInCart(id)) ? removeProductWithCart : addProductToCart}
                                        className={prodStyle["Product-AddProductIcon"]}
                                        src={(prodInCart(id)) ? removeProductIcon : addProductIcon} alt="icon" />
                                </div>
                            )
                        })
                }
            </div>

            <div>
                {
                    filteredData && (filteredData.length) === 0 &&
                    <h3 className={s["Search-EmptyArr"]}>Sorry, could not find anything for your request</h3>
                }
            </div>
        </>
    )
}

export default Search
