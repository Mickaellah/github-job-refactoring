import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import HeaderContainer from './containers/header';

import Home from './pages/home';

export default function App() {
    return (
        <HeaderContainer />
    )
}