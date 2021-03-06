import styled from 'styled-components';

export const Container = styled.section`
    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 48px;
        column-gap: 48px;
    }
`;

export const Header = styled.h1`
    color: black;
    text-transform: capitalize;
    font-size: 24px;
`;

export const FirstArticle = styled.article`
    @media (min-width: 700px) {
        grid-column: 1 / 2;
    }
`;

export const SecondArticle = styled.article`
    @media (min-width: 700px) {
        grid-column: 2 / 4;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
`;

export const Icon = styled.img`
    
`;

export const LinkText = styled.p`
    text-decoration: none;
    margin-inline-start: 16px;
    color: #1E86FF;
    font-size: 14px;
`;

export const SubTitle = styled.h3`
    color: #B9BDCF;
    font-size: 14px;
`;

export const Instruction = styled.p`
    font-size: 14px;
`;

export const JobTitle = styled.div``;

export const TitleContainer = styled.div`
    
`;

export const Title = styled.h2`
    font-size: 24px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
`;

export const TimeContainer = styled.div`
    display: flex;
`;

export const ClockIcon = styled.img``;

export const Time = styled.p`
    margin-inline-start: 16px;
    color: #B7BCCE;
    font-size: 12px;
    margin-block-start: 16px;
`;

export const Button = styled.button`
    padding: 6px;
    max-width: 18%;
    border-radius: 4px;
    border: 1px solid #334680;
    color: #334680;
    background-color: #dbdbdb;
    font-size: 12px;

    @media (max-width: 506px) {
        max-width: 20%;
    }

    @media (min-width: 700px) {
        position: absolute;
        max-width: 18%;
        left: 90%;
    }

`;

export const Company = styled.div`
    display: flex;
    margin-block-start: 32px;
`;

export const Logo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 4px;
`;

export const CompanyContainer = styled.div`
    margin-inline-start: 32px;
`;

export const CompanyName = styled.h3`
    margin: 0;
    font-size: 18px;
`;

export const Location = styled.div`
    display: flex;
`;

export const LocationIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-block-start: 12px;
`;

export const LocationName = styled.p`
    margin-inline-start: 16px;
    color: #B9BDCF;
    font-size: 12px;
    margin-block-start: 16px;
`;

export const Description = styled.p`
    color: #334680;
    margin-block-start: 48px;
`;