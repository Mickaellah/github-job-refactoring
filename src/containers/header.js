import React from 'react';
import {Header} from '../components';

export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Text>
                Gigthub job
            </Header.Text>
            {children}
        </Header>
    )
}