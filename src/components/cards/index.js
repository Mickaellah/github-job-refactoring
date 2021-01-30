import React from 'react';
import {Link as ReachRouterLink} from 'react-router-dom';

import { 
    Header, 
    LinkText,
    Logo, 
    Title, 
    Button, 
    City, 
    Time, 
    Container, 
    List,
    Group, 
    Content,
    LocationContainer,
    Holder } from './styles/cards';

export default function Cards({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Cards.Header = function CardsHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}

Cards.LinkText = function CardsLinkText({to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <LinkText {...restProps} />
        </ReachRouterLink>
    )
}

Cards.Group = function CardsGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Cards.List = function CardsList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Cards.Content = function CardsContent({children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}

Cards.Logo = function CardsLogo({...restProps}) {
    return <Logo {...restProps} />
}

Cards.Title = function CardsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Cards.Button = function CardsButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Cards.City = function CardsCity({children, ...restProps}) {
    return <City {...restProps}>{children}</City>
}

Cards.Time = function CardsTime({children, ...restProps}) {
    return <Time {...restProps}>{children}</Time>
}

Cards.LocationContainer = function CardsLocationContainer({children, ...restProps}) {
    return <LocationContainer {...restProps}>{children}</LocationContainer>
}

Cards.Holder = function CardsHolder({children, ...restProps}) {
    return <Holder {...restProps}>{children}</Holder>
}