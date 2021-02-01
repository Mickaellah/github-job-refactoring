import React, {useContext} from 'react';
import {Context} from '../context/context';

import {Cards} from '../components';

export default function CardsContainer({children}) {
    const {state} = useContext(Context);
    const {data, loading} = state;

    return (
        <Cards.Group>
            {loading && <h1>Loading...</h1>}
            {!loading && data && data.map(job => {

                let time = new Date().getTime() - new Date(job.created_at).getTime();
                let result = Math.floor(time / (1000 * 60 * 60 * 24));

                return (
                    <Cards.LinkText to={`${job.id}`}  key={job.id} >
                        <Cards.List>
                            <Cards.Logo src={job.company_logo} alt="Company logo" />
                            <Cards.Content>
                                <Cards.TitleContainer>
                                    <Cards.Header>{job.company}</Cards.Header>
                                    <Cards.Title>{job.title}</Cards.Title>
                                    <Cards.Button type="button">{job.type}</Cards.Button>
                                </Cards.TitleContainer>
                                <Cards.Holder>
                                    <Cards.LocationContainer>
                                        <Cards.Logo className="location" src="./images/public-24px.svg" alt="location" />
                                        <Cards.City>{job.location}</Cards.City>
                                    </Cards.LocationContainer>
                                    <Cards.LocationContainer>
                                        <Cards.Logo className="time" src="./images/access_time-24px.svg" alt="Access time" />
                                        <Cards.Time>{result} hours</Cards.Time>
                                    </Cards.LocationContainer>
                                </Cards.Holder>
                            </Cards.Content>
                        </Cards.List>
                    </Cards.LinkText>
                )
            })}
        </Cards.Group>
    )
}