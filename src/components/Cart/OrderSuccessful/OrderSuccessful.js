import React from "react"

import s from "./OrderSuccessful.module.scss"

import successfulIcon from "../../../img/cart/successful-icon.svg"
import { NavLink } from "react-router-dom"

const OrderSuccessful = () => {

    return (
        <div className={s.OrderSuccessful}>
            <span className={s["OrderSuccessful-Title"]}>THANK YOU!</span>
            <img className={s["OrderSuccessful-Img"]} src={successfulIcon} alt="icon" />
            <span className={s["OrderSuccessful-Subtitle"]}>Your ordering is completely successful</span>
            <p className={s["OrderSuccessful-Text"]}>We'll let you know when it ships and it headed your way.</p>
            <div className={s["OrderSuccessful-Order"]}>
                <span className={s["OrderSuccessful-NumberOrder"]}>Order:
                    <span className={s["OrderSuccessful-NumberOrder_num"]}> 0844253425</span>
                </span>
                <span className={s["OrderSuccessful-DateOrder"]}>Date order:
                    <span className={s["OrderSuccessful-NumberOrder_num"]}> 07/12/20</span>
                </span>
            </div>
            <NavLink className={s["OrderSuccessful-Link"]} to="/" >CONTINUE SHOPPING</NavLink>
        </div >
    )
}



export default OrderSuccessful