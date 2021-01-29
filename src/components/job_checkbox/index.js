import React from 'react';

import {Container, Input, Label} from './styles/job_checkbox';

export default function JobCheckbox({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

JobCheckbox.Input = function JobCheckboxInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

JobCheckbox.Label = function JobCheckboxLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}