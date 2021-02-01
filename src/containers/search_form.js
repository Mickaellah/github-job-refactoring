import React, {useState, useContext} from 'react';

import {Context} from '../context/context';
import {SearchForm} from '../components';

export default function SearchFormContainer({children}) {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const {state, dispatch} = useContext(Context);
    const {data} = state;

    function handleSubmit(e) {
        e.preventDefault();
        setCompany(e.target.value);
        setJobTitle(e.target.value);

        const jobs = data.filter(job => { 
            if (!jobTitle) return undefined;
            return job.title.toLowerCase().includes(jobTitle.toLowerCase()) || job.company.toLowerCase().includes(company.toLowerCase());
        });

        dispatch({type: "JOBS", job: jobs});
    }

    function handleChange(e) {
        setJobTitle(e.target.value);
        setCompany(e.target.value);
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <SearchForm.Input type="search" value={jobTitle} onChange={handleChange} placeholder="Title, companies, expertise" />
            <SearchForm.Button type="submit">Search</SearchForm.Button>
            {children}
        </SearchForm>
    )
}