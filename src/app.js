import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './pages/home';


export default function App() {
    return (
        <Router>
            <Switch>
                <Route to="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}