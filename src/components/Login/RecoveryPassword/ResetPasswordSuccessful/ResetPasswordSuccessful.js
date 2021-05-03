import React from "react"

import s from "./ResetPasswordSuccessful.module.scss"

import resetPasswordSuccessful from "../../../../img/login/reset-password-successful.svg"

import { connect } from "react-redux"

const ResetPasswordSuccessful = (emailFromRedux) => {
    return (
        <div className={s.ResetPasswordSuccessful}>
            <span className={s["ResetPasswordSuccessful-Title"]}>YOUR LINK HAS BEEN SENT</span>
            <img className={s["ResetPasswordSuccessful-Img"]} src={resetPasswordSuccessful} alt="icon" />
            <p className={s["ResetPasswordSuccessful-Text"]}>We have sent a password reset email to your adress:<br />
                <b className={s["ResetPasswordSuccessful-Email"]}>{emailFromRedux.email}</b>
            </p>
            <p className={s["ResetPasswordSuccessful-Info"]}>If you can’t find the email, please check your junk folder.</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    email: state.resetPassword.email.email
})

export default connect(mapStateToProps)(ResetPasswordSuccessful)