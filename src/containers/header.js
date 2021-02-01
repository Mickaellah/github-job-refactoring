import React from 'react';
import {Header} from '../components';

export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Text>
                Gigthub <small>jobs</small>
            </Header.Text>
            {children}
        </Header>
    )
}