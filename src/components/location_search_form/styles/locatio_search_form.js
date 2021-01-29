import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column-reverse;
    padding-block: 16px;
`;

export const Input = styled.input`
    max-width: 100%;
    padding: 12px;
    padding-inline-start: 48px;
    margin-block-start: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    background-image: url('./images/public-24px.svg');
    background-position: 2% 50%;
    background-repeat: no-repeat;

    ::placeholder {
        color: #b9bdcf;
    }

    @media (min-width: 600px) {
        padding-inline-start: 64px;
    }
`;

export const Label = styled.label`
    text-transform: uppercase;
    color: #b9bdcf;
`;
