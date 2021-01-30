import React from 'react';

import {Pageholder} from '../components';
import Checkboxes from './checkboxes';
import Cards from './card';

export default function PageholderContainer({children}) {
    return (
        <Pageholder>
            <Checkboxes/>
            <Cards />
        </Pageholder>
    )
}
