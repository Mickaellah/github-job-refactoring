import React from 'react';

import {SearchForm} from '../components';

export default function SearchFormContainer({children}) {
    return (
        <SearchForm>
            <SearchForm.Input type="search" placeholder="Title, companies, expertise" />
            <SearchForm.Button type="submit">Search</SearchForm.Button>
            {children}
        </SearchForm>
    )
}