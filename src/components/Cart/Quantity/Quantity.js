import React from "react"

import plusIcon from "../../../img/cart/plus-icon.svg"
import minusIcon from "../../../img/cart/minus-icon.svg"

import s from "./Quantity.module.scss"
import { useDispatch } from "react-redux"
import { setAmountProductInCart } from "../../../actions/actions"

const Quantity = (props) => {
    const dispatch = useDispatch()
    const addAmount = () => {
        dispatch(setAmountProductInCart(props.id, props.amount + 1))
    }
    const deleteAmount = () => {
        if (props.amount <= 0) {
            return 0
        }
        else {
            dispatch(setAmountProductInCart(props.id, props.amount - 1))
        }
    }
    return (
        <div className={s.Quantity}>
            <img className={s["Quantity-Icon"]} onClick={deleteAmount} src={minusIcon} alt="minus" />
            <input className={s["Quantity-Input"]} type="number" value={props.amount} disabled={true} />
            <img className={s["Quantity-Icon"]} onClick={addAmount} src={plusIcon} alt="plus" />
        </div>
    )
}


export default Quantity