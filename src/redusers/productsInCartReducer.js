
const initialState = [
]


export const productsInCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_IN_CART":
            return [...state, action.payload]

        case "REMOVE_PRODUCT_IN_CART":
            let targetIndex = state.findIndex((prod) => prod.id === action.id)
            let newState = [...state]
            newState.splice(targetIndex, 1)
            return newState

        case "REMOVE_ALL_PRODUCT_IN_CART":
            return []

        case "SET_AMOUNT_PRODUCTS_IN_CART":
            let tempState = [...state]
            tempState.map((prod) => {
                if (prod.id === action.payload.id) {
                    prod.amount = action.payload.amount
                }
            })
            return tempState

        default:
            return state
    }
};
