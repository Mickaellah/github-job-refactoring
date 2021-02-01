import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Context} from '../context/context';
import {JobDetails} from '../components';

export default function JobDetailsContainer({children}) {
    const {id} = useParams();
    const {state} = useContext(Context);
    const {data} = state;

    const findId = data.find(data => data.id === id);

    let time = new Date().getTime() - new Date(findId.created_at).getTime();
    let result = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
        <JobDetails>
            <JobDetails.Header><b>Github</b> jobs</JobDetails.Header>
            <JobDetails.FirstArticle>
                <JobDetails.LinkContainer>
                    <JobDetails.Icon src="./images/keyboard_backspace-24px.svg" alt="Go back" />
                    <JobDetails.LinkText to="/">Back to search</JobDetails.LinkText>
                </JobDetails.LinkContainer>
                <JobDetails.SubTitle>
                    How to apply
                </JobDetails.SubTitle>
                <JobDetails.Instruction>
                    Please email a copy of your resume and online portfilio to <a href="mailto:wes@kasisto.com" className="email_address">wes@kasisto.com</a> & CC <a href="mailto:eric@kasisto.com" className="email_address">eric@kasisto.com</a>
                </JobDetails.Instruction>
            </JobDetails.FirstArticle> 
            <JobDetails.SecondArticle>
                <JobDetails.JobTitle>
                    <JobDetails.TitleContainer>
                        <JobDetails.Title>
                            {findId.title}
                        </JobDetails.Title>
                        <JobDetails.ButtonContainer>
                            <JobDetails.TimeContainer>
                                <JobDetails.ClockIcon src="./images/access_time-24px.svg" alt="Clock icon" />
                                <JobDetails.Time> {result} hours ago.</JobDetails.Time>
                            </JobDetails.TimeContainer>
                            
                            <JobDetails.Button>{findId.type}</JobDetails.Button>
                        </JobDetails.ButtonContainer>
                    </JobDetails.TitleContainer>
                </JobDetails.JobTitle>
                <JobDetails.Company>
                    <JobDetails.Logo src={findId.company_logo} alt="company logo" />
                    <JobDetails.CompanyContainer>
                        <JobDetails.CompanyName>
                            {findId.company}
                        </JobDetails.CompanyName>
                        <JobDetails.Location>
                            <JobDetails.LocationIcon src="./images/public-24px.svg" alt="Location icon" />
                            <JobDetails.LocationName>
                                {findId.location}
                            </JobDetails.LocationName>
                        </JobDetails.Location>
                    </JobDetails.CompanyContainer>
                </JobDetails.Company>
                <JobDetails.Description>
                    {findId.description.replace(/<[^>]+>/g, '')}
                </JobDetails.Description>
            </JobDetails.SecondArticle>
        </JobDetails>
    )
}