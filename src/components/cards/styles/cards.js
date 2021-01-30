import styled from 'styled-components';

export const Container = styled.article`
    
`;

export const LinkText = styled.p`
    
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 16px;
    column-gap: 16px;
    padding: 16px;
    margin-block-start: 32px;
    background-color: #ffffff;
    border-radius: 4px;
    color: #334680;

    @media (min-width: 700px) {
        margin-inline-start: 32px;
    }
`;

export const Header = styled.h3`
    font-size: 12px;
`;

export const Group = styled.article``;

export const Content = styled.div`
    grid-column: 2 / 4;
`;

export const Title = styled.h2`
    font-size: 18px;
`;

export const Button = styled.button`
    border: 1px solid #334680;
    border-radius: 5px;
    padding: 8px;
    background-color: white;
    color: #334680;
`;

export const Logo = styled.img`
    grid-column: 1 / 2;
    border-radius: 4px;
`;

export const Time = styled.p`
    margin-inline-start: 16px;
    font-size: 12px;
    margin-block-start: 16px;
`;

export const City = styled.p`
    margin-inline-start: 16px;
    font-size: 12px;
    margin-block-start: 16px;
`;

export const LocationContainer = styled.div`
    display: flex;
`;

export const Holder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-block-start: 16px;
    color: #B7BCCE;
;

    @media (min-width: 1000px) {
        margin-inline-start: 50%;
    }
`;