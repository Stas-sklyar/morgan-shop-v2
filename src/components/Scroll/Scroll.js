import React, { useEffect, useState } from "react"

import s from "./Scroll.module.scss"

import scrollIcon from "../../img/scroll/scroll-icon.svg"

const Scroll = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    return (
        <div className={s.Scroll} onClick={offset > 1000 ? scrollToTop : null}
            style={{ opacity: offset > 1000 ? 1 : 0, cursor: offset > 1000 ? "pointer" : "default" }} >
            <img className={s["Scroll-Icon"]} src={scrollIcon} alt="scroll to top" />
            <span className={s["Scroll-Text"]}>Top</span>
        </div >
    )
}


export default Scroll