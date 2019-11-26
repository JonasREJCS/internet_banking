import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Extrato from './pages/Extrato';

export default function Routes() {
    function requireAuth(nextState, replace, next) {
        if (!localStorage.getItem('user')) {
          replace({
            pathname: "/login",
            state: {nextPathname: nextState.location.pathname}
          });
        }
        next();
      }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} onEnter={requireAuth}/>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/extrato" component={Extrato} />
            </Switch>
        </BrowserRouter>
    )
}