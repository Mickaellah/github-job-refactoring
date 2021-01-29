import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import {ContextProvider} from './context/context';

ReactDOM.render(
    <ContextProvider>
        <App/>
    </ContextProvider>, document.getElementById('root'));