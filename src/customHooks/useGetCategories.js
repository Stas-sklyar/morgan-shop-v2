import { useState, useEffect } from "react"

export const useGetCategories = () => {
    const [categories, setCategories] = useState()

    const getNewCategories = () => {
        fetch("https://morgan-shop.herokuapp.com/categories")
            .then((res) => res.json())
            .then((categories) => {
                setCategories(categories.categories)
            })
            .catch((error) => {
                alert("something went wrong, please try again later");
                console.log(error)
            });
    };

    useEffect(() => {
        getNewCategories()
    }, [])

    return [categories, getNewCategories]
}
