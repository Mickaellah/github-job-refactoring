import React from 'react';
import HeaderContainer from '../containers/header';
import SearchFormContainer from '../containers/search_form';
import PageholderContainer from '../containers/pageholder';

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <SearchFormContainer />
            <PageholderContainer />
        </>
    )
}