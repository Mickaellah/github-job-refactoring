import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
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
`;