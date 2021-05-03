
const initialState = {
    email: ""
}


export const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESET_PASSWORD_HANDLE_FORM_CHANGE":
            return { ...state, email: action.payload }

        default:
            return state
    }
};
