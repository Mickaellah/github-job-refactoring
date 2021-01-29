import styled from 'styled-components';

export const Container = styled.form`
    width: 80%;
    padding: 32px;
    border-radius: 12px;
    background-image: url('./images/backgroundImg.png');
    background-repeat: no-repeat;
    object-fit: contain;
`;

export const Input = styled.input`
    width: 100%;
    padding-right: 30%;
    padding-block: 16px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff;
    padding-inline-start: 16px;
    color: #dbdbdb;
    margin-block-start: 8px;
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