import React from "react"
import { connect, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { removeProductInCart } from "../../../actions/actions"

import s from "../Cart.module.scss"
import Order from "../Order/Order"
import Quantity from "../Quantity/Quantity"

import deleteProductIcon from "../../../img/cart/delete-product-icon.svg"

const ProductInCart = ({ productsInCart }) => {
    const host = "https://morgan-shop.herokuapp.com/"
    const dispatch = useDispatch()

    const removeProductWithCart = (e) => {
        dispatch(removeProductInCart(e.target.dataset.prodId))
    }

    return (
        <div className={s["Cart-Body"]}>

            <div className={s["Cart-Products"]}>
                {productsInCart &&
                    productsInCart.map(({ id, categoryId, name, alias, price, image, timeStamp, amount }) => {
                        return (
                            <div key={id} className={s["Cart-Product"] + " " + s.ProductInCart}>
                                <img className={s["ProductInCart-Img"]} src={host + image} alt={name} />

                                <div className={s["ProductInCart-Info"]}>

                                    <div className={s["ProductInCart-Text"]}>
                                        <span className={s["ProductInCart-Name"]}>{name}</span>
                                        <span className={s["ProductInCart-Category"]}>{alias}</span>
                                        <img data-prod-id={id} src={deleteProductIcon} onClick={removeProductWithCart}
                                            className={s["ProductInCart-RemoveProductIcon"]} alt="icon" />
                                    </div>

                                    <div className={s["ProductInCart-Nav"]}>
                                        <Quantity amount={amount} id={id} />
                                        <span>{"£" + (price * amount) + ".00"}</span>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <Order />

            <NavLink className={s["ProductInCart-Link"]} to="/morgan-shop-v2/" >Continue shopping</NavLink>

        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps)(ProductInCart)