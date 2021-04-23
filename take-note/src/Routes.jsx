import React from 'react';
import {Start} from './Start';
import {Register} from './Register';
import App from './App';

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'

function Routes(){
    return (
        <Router>
            <Link to="/register">Registro</Link>
            <Link to="/App">Tus Notas</Link>
            <Link to="/">Inicio</Link>
            <Switch>
                <Route exact path="/">
                    <Start/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/App">
                    <App/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;