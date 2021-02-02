import React, {useContext, useState} from 'react';
import {Context} from '../context/context';

import {Cards} from '../components';

export default function CardsContainer({children}) {
    const {state} = useContext(Context);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(10);
    const {data, loading} = state;
    console.log(data);

    function handleClick(e) {
        setCurrentPage(Number(e.target.id));
        console.log("I am clicked");
    }

    const indexOfLastCards = currentPage * cardsPerPage;
    const indexOfFirstCards = indexOfLastCards - cardsPerPage;
    const currentCards = data && data.slice(indexOfFirstCards, indexOfLastCards);

    const renderCards = currentCards && currentCards.map((card, index) => {
        let time = new Date().getTime() - new Date(card.created_at).getTime();
        let result = Math.floor(time / (1000 * 60 * 60 * 24));
        return (
            <Cards.Group key={index}>
                <Cards.LinkText to={`${card.id}`} >
                    <Cards.List>
                        <Cards.Logo src={card.company_logo} alt="Company logo" />
                        <Cards.Content>
                            <Cards.TitleContainer>
                                <Cards.Header>{card.company}</Cards.Header>
                                <Cards.Title>{card.title}</Cards.Title>
                                <Cards.Button type="button">{card.type}</Cards.Button>
                            </Cards.TitleContainer>
                            <Cards.Holder>
                                <Cards.LocationContainer>
                                    <Cards.Logo className="location" src="./images/public-24px.svg" alt="location" />
                                    <Cards.City>{card.location}</Cards.City>
                                </Cards.LocationContainer>
                                <Cards.LocationContainer>
                                    <Cards.Logo className="time" src="./images/access_time-24px.svg" alt="Access time" />
                                    <Cards.Time>{result} hours</Cards.Time>
                                </Cards.LocationContainer>
                            </Cards.Holder>
                        </Cards.Content>
                    </Cards.List>
                </Cards.LinkText>
            </Cards.Group>
        )
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data && data.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    } 

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <button type="button" className="page" id={number} key={number} onClick={handleClick}>
                {number}
            </button>
        )
    })

    return (
        <section>
            <div>
                {renderCards}
            </div>
            <div className="page_numbers">
                {renderPageNumbers}
            </div>
        </section>
    )
}