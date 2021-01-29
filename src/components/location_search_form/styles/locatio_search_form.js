import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column-reverse;
    padding-block: 16px;
`;

export const Input = styled.input`
    max-width: 100%;
    padding: 12px;
    margin-block-start: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Label = styled.label`
    text-transform: uppercase;
`;
