
import { combineReducers } from "redux";
import { sortReducer } from "./sortReducer";
import { productsInCartReducer } from "./productsInCartReducer"
import { loginReducer } from "./loginReducer"
import { resetPasswordReducer } from "./resetPasswordReducer"
import { registrationReducer } from "./registrationReducer"


export const rootReducer = combineReducers({
    sortMethod: sortReducer,
    productsInCart: productsInCartReducer,
    loginForm: loginReducer,
    registrationForm: registrationReducer,
    resetPassword: resetPasswordReducer,
});
