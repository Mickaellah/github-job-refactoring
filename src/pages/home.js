import React from 'react';
import HeaderContainer from '../containers/header';
import SearchFormContainer from '../containers/search_form';
import CardsContainer from '../containers/card';
import CheckboxesContainer from '../containers/checkboxes';

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <SearchFormContainer />
            <CheckboxesContainer />
            <CardsContainer />
        </>
    )
}