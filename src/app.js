import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './pages/home';

import {Context} from './context/context';


export default function App() {
    const {state} = useContext(Context);
    const {data, loading} = state;
    console.log(data);
    console.log(loading);

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {!loading && data && (
                <Router>
                    <Switch>
                        <Route to="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            )}
        </>
    )
}