import React from "react"
import { NavLink } from "react-router-dom"

import error404Icon from "../../img/error404/error404-icon.svg"

import s from "./Error404.module.scss"

const Error404 = () => {
    return (
        <div className={s["Error404"]}>
            <img className={s["Error404-Img"]} src={error404Icon} alt="icon" />
            <span className={s["Error404-Label"]}>Sorry, we can't find this page</span>
            <NavLink className={s["Error404-Link"]} to="/" >home page</NavLink>
        </div>
    )
}

export default Error404