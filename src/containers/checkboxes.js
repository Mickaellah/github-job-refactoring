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

    return (
        <div>
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
                    <LocationCheckboxes.Input type="checkbox" />
                    <LocationCheckboxes.Label>
                        London
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" />
                    <LocationCheckboxes.Label>
                        Amsterdam
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" />
                    <LocationCheckboxes.Label>
                        New York
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
                <LocationCheckboxes.Fieldset>
                    <LocationCheckboxes.Input type="checkbox" />
                    <LocationCheckboxes.Label>
                        Berlin
                    </LocationCheckboxes.Label>
                </LocationCheckboxes.Fieldset>
            </LocationCheckboxes>
        </div>
    )
}