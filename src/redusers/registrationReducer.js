
const initialState = {
    userName: "",
    userEmail: "",
    userPassword: "",
}


export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTRATION_HANDLE_FORM_CHANGE":
            return { ...state, ...action.payload }

        default:
            return state
    }
}
