import React from 'react';

import {Container, Input, Button} from './styles/search-form';


export default function SearchForm({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

SearchForm.Input = function SearchFormInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

SearchForm.Button = function SearchFormButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}