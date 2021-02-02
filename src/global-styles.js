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

    .loading {
        font-size: 36px;
        margin-inline-start: 32px;
    }

    button {
        cursor: pointer;
    }

    small {
        text-transform: capitalize;
        font-weight: lighter;
    }

    .page_numbers {
        display: flex;
        flex-direction: row;
        margin-inline-start: 37%;
        margin-block-start: 32px;

        @media (min-width: 600px) {
            margin-inline-start: 50%;
        }

        @media (min-width: 800px) {
            margin-inline-start: 60%;
        }
    }

    .page {
        margin-inline-start: 16px;
        border: 1px solid #B7BCCE;
        color: #B7BCCE;
        background-color: #dbdbdb;
        border-radius: 4px;
        padding-block: 8px;
        padding-inline: 12px;
    }

    .page:focus {
        color: white;
        background-color: #1E86FF;
    } 

    .page:hover {
        color: #1E86FF;
        border: 1px solid #1E86FF;
    }
`;