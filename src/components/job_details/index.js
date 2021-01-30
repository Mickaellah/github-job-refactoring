import React from 'react';

import {Link as ReachRouterLink} from 'react-router-dom';

import {
    Container, 
    Article, 
    LinkContainer,
    Icon,
    LinkText,
    SubTitle,
    Instruction,
    JobTitle,
    TitleContainer,
    Title,
    TimeContainer,
    ClockIcon,
    Time,
    Button,
    Company,
    Logo,
    CompanyContainer,
    CompanyName,
    Location,
    LocationIcon,
    LocationName,
    Description
} from './styles/job_details';

export default function JobDetails({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

JobDetails.Article = function JobDetailsArticle({children, ...restProps}) {
    return <Article {...restProps}>{children}</Article>
}

JobDetails.LinkContainer = function JobDetailsLinkContainer({children, ...restProps}) {
    return <LinkContainer {...restProps}>{children}</LinkContainer>
}

JobDetails.Icon = function JobDetailsIcon({children, ...restProps}) {
    return <Icon {...restProps}>{children}</Icon>
}

JobDetails.LinkText = function JobDetailsLinkText({to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <LinkText {...restProps} />
        </ReachRouterLink>
    )
}

JobDetails.SubTitle = function JobDetailsSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

JobDetails.Instruction = function JobDetailsInstruction({children, ...restProps}) {
    return <Instruction {...restProps}>{children}</Instruction>
}

JobDetails.JobTitle = function JobDetailsJobTitle({children, ...restProps}) {
    return <JobTitle {...restProps}>{children}</JobTitle>
}

JobDetails.TitleContainer = function JobDetailsTitleContainer({children, ...restProps}) {
    return <TitleContainer {...restProps}>{children}</TitleContainer>
}

JobDetails.Title = function JobDetailsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

JobDetails.TimeContainer = function JobDetailsTimeContainer({children, ...restProps}) {
    return <TimeContainer {...restProps}>{children}</TimeContainer>
}

JobDetails.ClockIcon = function JobDetailsClockIcon({children, ...restProps}) {
    return <ClockIcon {...restProps}>{children}</ClockIcon>
}

JobDetails.Time = function JobDetailsTime({children, ...restProps}) {
    return <Time {...restProps}>{children}</Time>
}

JobDetails.Button = function JobDetailsButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

JobDetails.Company = function JobDetailsCompany({children, ...restProps}) {
    return <Company {...restProps}>{children}</Company>
}

JobDetails.Logo = function JobDetailsLogo({children, ...restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}

JobDetails.CompanyContainer = function JobDetailsCompanyContainer({children, ...restProps}) {
    return <CompanyContainer {...restProps}>{children}</CompanyContainer>
}

JobDetails.CompanyName = function JobDetailsCompanyName({children, ...restProps}) {
    return <CompanyName {...restProps}>{children}</CompanyName>
}

JobDetails.Location = function JobDetailsLocation({children, ...restProps}) {
    return <Location {...restProps}>{children}</Location>
}

JobDetails.LocationIcon = function JobDetailsLocationIcon({children, ...restProps}) {
    return <LocationIcon {...restProps}>{children}</LocationIcon>
}

JobDetails.LocationName = function JobDetailsLocationName({children, ...restProps}) {
    return <LocationName {...restProps}>{children}</LocationName>
}

JobDetails.Description = function JobDetailsDescription({children, ...restProps}) {
    return <Description {...restProps}>{children}</Description>
}
