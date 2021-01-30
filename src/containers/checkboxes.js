import React, {useState, useContext} from 'react';

import {Context} from '../context/context';

import {JobCheckbox, LocationSearchForm, LocationCheckboxes} from '../components';

export default function CheckboxesContainer({children}) {
    const {state, dispatch} = useContext(Context);
    const [isChecked, setIsChecked] = useState(false);

    const {data} = state;

    function handleSubmit(e) {
        setIsChecked(e.target.isChecked);

        const filterArray = data.filter(data => data.type === "Full Time");
        console.log(filterArray);

        dispatch({type: "JOBS", job: filterArray});
    }

    return (
        <div>
            <JobCheckbox>
                <JobCheckbox.Input type="checkbox" value={isChecked} onChange={handleSubmit} />
                <JobCheckbox.Label>Full time</JobCheckbox.Label>
            </JobCheckbox>
            <LocationSearchForm>
                <LocationSearchForm.Input type="text" placeholder="City, state, zip code or country" />
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