import React from "react"
import { NavLink } from "react-router-dom"
import s from "../Header.module.scss"

import logo from "../../../img/header/logo.png"

import { useGetCategories } from "../../../customHooks/useGetCategories"

const HeaderNav = () => {
    const [categoriesFromHook] = useGetCategories();

    return (
        <nav className={s["Header-Nav"]}>
            <ul className={s["Header-Menu"]}>
                <li className={s["Header-Item"]}>
                    <NavLink to="/morgan-shop-v2/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </li>
                {categoriesFromHook &&
                    categoriesFromHook.sort((a, b) => a.menuOrder - b.menuOrder)
                        .map(({ id, title, alias, image, menuOrder }) => (
                            <li key={id} className={s["Header-Item"]}>
                                <NavLink activeClassName={s["Header-Item_active"]} to={'/' + 'morgan-shop-v2/' + alias}>{title}</NavLink>
                            </li>
                        ))
                }
            </ul>
        </nav>
    )
}

export default HeaderNav