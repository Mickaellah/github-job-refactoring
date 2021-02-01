import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Roboto Regular";
        src: url('./fonts/Roboto-Regular.woff2') format('woff2'),
            url('./fonts/Roboto-Regular.woff') format('woff');
        font-weight: 400;
    }
    html, body {
        font-family: "Roboto Regular";
        font-size: 16px;
        margin: 0;
        padding: 16px;
        color: #334680;
        background-color: #dbdbdb;

        @media (min-width: 600px) {
            max-width: 1214px;
            margin-inline-start: auto;
            margin-inline-end: auto;
        }
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }

    .location,
    .time {
        width: 24px;
    }

    @media (min-width: 1000px) {
        .location,
        .time {
            margin-block-start: 40px;
        }
    }

    .email_address {
        color: #1E86FF;
    }

    small {
        text-transform: lowercase;
        font-weight: lighter;
    }
`;