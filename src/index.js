import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {GlobalStyles} from './global-styles';

import {ContextProvider} from './context/context';

ReactDOM.render(
    <ContextProvider>
        <GlobalStyles />
        <App/>
    </ContextProvider>, document.getElementById('root'));