import React from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { handleFormChangeResetPassword } from "../../../actions/actions"

import s from "./RecoveryPassword.module.scss"

const RecoveryPassword = () => {
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.value

        dispatch(handleFormChangeResetPassword({ email: value }))
    }

    return (
        <div className={s.RecoveryPassword}>
            <h1 className={s["RecoveryPassword-Title"]}>RESET YOUR PASSWORD</h1>
            <p className={s["RecoveryPassword-Text"]}>Enter the email address for your Morgan account and we’ll send a single-use password reset link.</p>
            <p className={s["RecoveryPassword-Text"]}>This link will expire after 24 hours.</p>
            <form className={s["RecoveryPassword-Form"]}>
                <label className={s["RecoveryPassword-Label"]}>
                    Email
                    <input className={s["RecoveryPassword-Input"]} onChange={handleInputChange}
                        type="email" placeholder="Enter your email" required />
                </label>
                <NavLink className={s["RecoveryPassword-Button"]} to="/reset-password-successful">SEND A PASSWORD RESET LINK</NavLink>
                <NavLink className={s["RecoveryPassword-Link"]} to={"/login"}>Back to login</NavLink>
            </form>

        </div>
    )
}

export default RecoveryPassword