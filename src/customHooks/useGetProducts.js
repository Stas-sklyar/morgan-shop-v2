import { useState, useEffect } from "react"

export const useGetProducts = () => {
    const [products, setProducts] = useState()

    const getNewProducts = () => {
        fetch("https://morgan-shop.herokuapp.com/products")
            .then((res) => res.json())
            .then((products) => {
                setProducts(products.products)
            })
    };

    useEffect(() => {
        getNewProducts()
    }, [])

    return [products, getNewProducts]
};
