import { useState, useEffect } from "react"

export const useGetCategories = () => {
    const [categories, setCategories] = useState()

    const getNewCategories = () => {
        fetch("https://morgan-shop.herokuapp.com/categories")
            .then((res) => res.json())
            .then((categories) => {
                setCategories(categories.categories)
            })
    };

    useEffect(() => {
        getNewCategories()
    }, [])

    return [categories, getNewCategories]
}
