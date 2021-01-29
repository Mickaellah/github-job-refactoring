import React from 'react';

import {JobCheckbox} from '../components';

export default function CheckboxesContainer({children}) {
    return (
        <div>
            <JobCheckbox>
                <JobCheckbox.Input type="checkbox" />
                <JobCheckbox.Label>Full time</JobCheckbox.Label>
            </JobCheckbox>
        </div>
    )
}