import React, {useState, useContext} from 'react';
import {Context} from '../context/context';
import {JobCheckbox, LocationSearchForm, LocationCheckboxes} from '../components';

export default function CheckboxesContainer({children}) {
    const {state, dispatch} = useContext(Context);
    const [isChecked, setIsChecked] = useState(false);
    const [city, setCity] = useState('');
    const {data} = state;

    function handleChange(e) {
        setIsChecked(e.target.isChecked);
        const filterArray = data.filter(data => data.type === "Full Time");
        console.log(filterArray);
        dispatch({type: "JOBS", job: filterArray});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCity(e.target.value);
        const jobCity = data.filter(job => { 
            if (!city) return undefined;
            return job.location.toLowerCase().includes(city.toLowerCase());
        });
        dispatch({type: "JOBS", job: jobCity});
    }

    function handleLondon(e) {
        setIsChecked(e.target.isChecked)

        const filterArr = state.data.filter(job => job.location === "London");
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleAmsterdam(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "Amsterdam");
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleNewYork(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "New York City");
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleBerlin(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "Berlin");
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleUnitedStates(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "United States");
        dispatch({type: "JOBS", job: filterArr});
    }

    return (
        <section>
            <JobCheckbox>
                <JobCheckbox.Input type="checkbox" value={isChecked} onChange={handleChange} />
                <JobCheckbox.Label>Full time</JobCheckbox.Label>
            </JobCheckbox>
            <LocationSearchForm onSubmit={handleSubmit}>
                <LocationSearchForm.Input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City, state, zip code or country" />
                <LocationSearchForm.Label>Location</LocationSearchForm.Label>
            </LocationSearchForm>
            <LocationCheckboxes>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" value={isChecked} onChange={handleLondon} />
                    <LocationCheckboxes.Label>
                        London
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" value={isChecked} onChange={handleAmsterdam} />
                    <LocationCheckboxes.Label>
                        Amsterdam
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" value={isChecked} onChange={handleNewYork} />
                    <LocationCheckboxes.Label>
                        New York
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" value={isChecked} onChange={handleBerlin} />
                    <LocationCheckboxes.Label>
                        Berlin
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" value={isChecked} onChange={handleUnitedStates} />
                    <LocationCheckboxes.Label>
                        United States
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
            </LocationCheckboxes>
        </section>
    )
}