import React from "react"
import { NavLink } from "react-router-dom"
import { useGetCategories } from "../../../customHooks/useGetCategories"
import s from "./AdaptiveMenu.module.scss"


const AdaptiveMenu = (props) => {
    const [categoriesFromHook] = useGetCategories()

    return (
        <div className={s.AdaptiveMenu}>
            <span className={s["AdaptiveMenu-Title"]}>PRODUCTS</span>
            <ul className={s["AdaptiveMenu-List"]}>

                {categoriesFromHook &&
                    categoriesFromHook.sort((a, b) => a.menuOrder - b.menuOrder)
                        .map(({ id, title, alias, image, menuOrder }) => (
                            <li key={id} className={s["AdaptiveMenu-Item"]}>
                                <NavLink className={s["AdaptiveMenu-Link"]} activeClassName={s["AdaptiveMenu-Link_active"]} to={'/' + alias}>{title}</NavLink>
                            </li>
                        ))
                }

            </ul>
        </div>
    )
}

export default AdaptiveMenu