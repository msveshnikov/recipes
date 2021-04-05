import React from "react";
import { Route } from "react-router";

export default (
    <Route>
        <Route path="/recipe/:category/:id"/>
        <Route path="/category/:parent"/>
        <Route path="/recipes/:category"/>
        <Route path="/" />
    </Route>
);
