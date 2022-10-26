import React from 'react';
import CVHeader from './CVHeader';
import Main from './Main';

const EmptyCV = ({general, education, experience}) => {

    return (
    <div className="emptyCV container my-3 border p-3">
        <CVHeader general={general} experience={experience}/>
        <Main general={general} experience={experience} education={education}/>
    </div>

    )
}

export default EmptyCV
