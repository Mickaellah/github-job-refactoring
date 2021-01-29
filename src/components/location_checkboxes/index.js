import React from 'react';

import {Container, Fieldset, Input, Label} from './styles/location_checkboxes';

export default function LocationCheckboxes({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

LocationCheckboxes.Fieldset = function LocationCheckboxesFieldset({children, ...restProps}) {
    return <Fieldset {...restProps}>{children}</Fieldset>
}

LocationCheckboxes.Input = function LocationCheckboxesInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

LocationCheckboxes.Label = function LocationCheckboxesLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}