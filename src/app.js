import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/job_detail';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/:id">
                    <Details />
                </Route>
            </Switch>
        </Router>
    )
}