import React, { useState } from "react"
import s from "./Header.module.scss"

import HeaderNav from "./HeaderNav/HeaderNav"
import HeaderIcons from "./HeaderIcons/HeaderIcons"

import logo from "../../img/header/logo.png"
import burgerIcon from "../../img/header/burger-icon.svg"
import closeMenuIcon from "../../img/header/close-menu-icon.svg"
import AdaptiveMenu from "./AdaptiveMenu/AdaptiveMenu"
import { NavLink } from "react-router-dom"


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className={s.Header}>
            <div className={s["Header-Wrapper"]}>
                <div className={s["Header-Burger"]}>
                    {menuOpen
                        ? <img onClick={() => setMenuOpen(!menuOpen)} src={closeMenuIcon} alt="burger" />
                        : <img onClick={() => setMenuOpen(!menuOpen)} src={burgerIcon} alt="burger" />}
                    {menuOpen
                        ? <div onClick={() => setMenuOpen(!menuOpen)}><AdaptiveMenu /></div>
                        : null}
                </div>
                <div className={s["Header-Logo"]}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <HeaderNav />
                <HeaderIcons />
            </div>
        </header >

    )
}

export default Header