import React, {useState, useContext} from 'react';

import {Context} from '../context/context';
import {SearchForm} from '../components';

export default function SearchFormContainer({children}) {
    const [jobTitle, setJobTitle] = useState('');
    const {state, dispatch} = useContext(Context);
    const {data} = state;

    function handleSubmit(e) {
        e.preventDefault();

        const jobs = data.filter(job => { 
            if (!jobTitle) return undefined;
            return job.title.toLowerCase().includes(jobTitle.toLowerCase());
        });

        dispatch({type: "JOBS", job: jobs});
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <SearchForm.Input type="search" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Title, companies, expertise" />
            <SearchForm.Button type="submit">Search</SearchForm.Button>
            {children}
        </SearchForm>
    )
}