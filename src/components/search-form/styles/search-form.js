import styled from 'styled-components';

export const Container = styled.form`
    max-width: 100%;
    padding: 32px;
    border-radius: 12px;
    background-image: url('./images/backgroundImg.png');
    background-repeat: no-repeat;
    object-fit: contain;

    @media (min-width: 750px) {
        padding: 48px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding-right: 30%;
    padding-block: 16px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff;
    padding-inline-start: 48px;
    color: #dbdbdb;
    margin-block-start: 8px;
    background-image: url('./images/work_outline-24px.svg');
    background-repeat: no-repeat;
    background-position: 2% 50%;

    ::placeholder {
        color: #b9bdcf;
        font-size: 12px;
    }

    @media (min-width: 600px) {
        padding-inline-start: 64px;
        padding: 24px;
    } 
`;

export const Button = styled.button`
    margin-left: -80px;
    background-color: #1e86ff;
    color: white;
    border: 0;
    padding-inline: 16px;
    padding-block: 12px;
    border-radius: 5px;
    -webkit-appearance: none;
`;