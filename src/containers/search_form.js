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

        const jobs = data.filter(job => { 
            if (!jobTitle) return undefined;
            return job.title.toLowerCase().includes(jobTitle.toLowerCase());
        });

        const companies = data.filter(job => { 
            if (!company) return undefined;
            return job.company.toLowerCase().includes(company.toLowerCase());
        });

        dispatch({type: "JOBS", job: jobs, job: companies});
        // dispatch({type: "JOBS", job: companies});
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