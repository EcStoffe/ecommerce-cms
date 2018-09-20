import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Prodspec from "./Prodspec";
import App from "./App";


class router extends Component {
    render (){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/product/:id" component={Prodspec} />
                    <Route path="/" component={App}  />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default router;