export const changeMethodSort = (payload) => ({
    type: "CHANGE_METHOD_SORT",
    payload,
})


export const addProductInCart = (product) => ({
    type: "ADD_PRODUCT_IN_CART",
    payload: { ...product, amount: 1 },
})

export const removeProductInCart = (id) => ({
    type: "REMOVE_PRODUCT_IN_CART",
    id,
})

export const setAmountProductInCart = (id, amount) => ({
    type: "SET_AMOUNT_PRODUCTS_IN_CART",
    payload: {
        id: id,
        amount: amount,
    },
})


export const removeAllProductInCart = () => ({
    type: "REMOVE_ALL_PRODUCT_IN_CART",
})


export const handleFormChangeLogin = (formData) => ({
    type: "LOGIN_HANDLE_FORM_CHANGE",
    payload: formData,
})

export const handleFormChangeRegistration = (formData) => ({
    type: "REGISTRATION_HANDLE_FORM_CHANGE",
    payload: formData,
})


export const handleFormChangeResetPassword = (value) => ({
    type: "RESET_PASSWORD_HANDLE_FORM_CHANGE",
    payload: value,
})