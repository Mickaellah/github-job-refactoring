import React from 'react';

import {Container} from './styles/pageholder';

export default function Pageholder({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}