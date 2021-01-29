import React from 'react';

import {Container, Input, Label} from './styles/locatio_search_form';

export default function LocationSearchForm({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

LocationSearchForm.Input = function LocationSearchFormInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

LocationSearchForm.Label = function LocationSearchFormLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}