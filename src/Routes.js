import React from "react";
import { Switch, Route } from "react-router-dom"

import Home from "./components/Home/Home"
import TableLamps from "./components/TableLamps/TableLamps"
import FloorLamps from "./components/FloorLamps/FloorLamps"
import ExteriorCeiling from "./components/ExteriorCeiling/ExteriorCeiling"
import InteriorCeiling from "./components/InteriorCeiling/InteriorCeiling"
import Error404 from "./components/Error404/Error404"
import Cart from "./components/Cart/Cart"
import Login from "./components/Login/Login"
import Registration from "./components/Login/Registration/Registration"
import RecoveryPassword from "./components/Login/RecoveryPassword/RecoveryPassword"
import OrderSuccessful from "./components/Cart/OrderSuccessful/OrderSuccessful";
import ResetPasswordSuccessful from "./components/Login/RecoveryPassword/ResetPasswordSuccessful/ResetPasswordSuccessful";
import ProductItem from "./components/ProductItem/ProductItem";
import Search from "./components/Search/Search";

const Routes = () => {

    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/table-lamps" exact>
                <TableLamps />
            </Route>
            <Route path="/floor-lamps" exact>
                <FloorLamps />
            </Route>
            <Route path="/exterior-ceiling" exact>
                <ExteriorCeiling />
            </Route>
            <Route path="/interior-ceiling" exact>
                <InteriorCeiling />
            </Route>
            <Route path="/search" exact>
                <Search />
            </Route>
            <Route path="/product/:id">
                <ProductItem />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/registration" exact>
                <Registration />
            </Route>
            <Route path="/regovery-pasword" exact>
                <RecoveryPassword />
            </Route>
            <Route path="/cart" exact>
                <Cart />
            </Route>
            <Route path="/order-successful" exact>
                <OrderSuccessful />
            </Route>
            <Route path="/reset-password-successful" exact>
                <ResetPasswordSuccessful />
            </Route>
            <Route path="*">
                <Error404 />
            </Route>
        </Switch >
    )
}

export default Routes
