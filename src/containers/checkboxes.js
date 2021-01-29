import React from 'react';

import {JobCheckbox, LocationSearchForm, LocationCheckboxes} from '../components';

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