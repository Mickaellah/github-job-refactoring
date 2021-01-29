import React from 'react';

import {JobCheckbox, LocationSearchForm} from '../components';

export default function CheckboxesContainer({children}) {
    return (
        <div>
            <JobCheckbox>
                <JobCheckbox.Input type="checkbox" />
                <JobCheckbox.Label>Full time</JobCheckbox.Label>
            </JobCheckbox>
            <LocationSearchForm>
                <LocationSearchForm.Input type="text" placeholder="City, state, zip code or country" />
                <LocationSearchForm.Label>Location</LocationSearchForm.Label>
                {children}
            </LocationSearchForm>
        </div>
    )
}