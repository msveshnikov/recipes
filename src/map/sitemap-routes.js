import React from "react";
import { Route } from "react-router";

export default (
    <Route>
        <Route path="/recipe/:category/:id"/>
        <Route path="/category/:category"/>
        <Route path="/recipes/:category"/>
        <Route path="/" />
    </Route>
);
