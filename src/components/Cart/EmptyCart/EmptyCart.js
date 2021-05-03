import React from "react"
import { NavLink } from "react-router-dom"

import s from "./EmptyCart.module.scss"

import emptyBasketIcon from "../../../img/cart/empty-basket-icon.png"

const EmptyCart = () => {
    return (
        <div className={s.EmptyCart}>
            <img className={s["EmptyCart-Icon"]} src={emptyBasketIcon} alt="icon" />
            <span>Your basket is empty</span>
            <NavLink className={s["EmptyCart-Link"]} to={"/ms-hw-build/"}>start shoping</NavLink>
        </div>
    )
}

export default EmptyCart