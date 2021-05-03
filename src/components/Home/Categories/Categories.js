import React from "react"
import { NavLink } from "react-router-dom"
import { useGetCategories } from "../../../customHooks/useGetCategories"

import s from "./Categories.module.scss"

const Categories = () => {
    const host = "https://morgan-shop.herokuapp.com/"

    const [categoriesFromHook] = useGetCategories()

    return (
        <section className={s.Categories}>
            {categoriesFromHook &&
                categoriesFromHook.map(({ id, title, alias, image, menuOrder }) => (
                    <div key={id} className={s["Categories-ImgBox"]}>
                        <NavLink className={s["Categories-Link"]} to={'/' + alias}>
                            <img className={s["Categories-Img"]} src={host + image} alt={title} />
                            <div className={s["Categories-Label"] + " " + ((title === "Table lamps") ? s["Categories-Label_light"] : null)}>{title}</div>
                        </NavLink>
                    </div>
                ))
            }
        </section>
    )
}

export default Categories