
const initialState = {
    userEmail: "",
    userPassword: "",
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_HANDLE_FORM_CHANGE":
            return { ...state, ...action.payload }

        default:
            return state
    }
}
