import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Body } from '../components/Body';
import { Cart } from '../components/Cart';
import { ButtonFloat } from '../components/gen/ButtonFloat';
import {Nav} from '../components/gen/Nav'

export const RouterPublic = () => {
    return (
        <Router>
            
            <Nav />

            <Switch >

                <Route exact path="/"  >
                    <Body />
                    <ButtonFloat />
                </Route>
                <Route exact path="/cart" component={Cart} />

            </Switch>

            
        </Router>
    )
}
