import React from 'react';
import FormGroup from './FormGroup';
import Button from './Button'

const Form = ({formInfo, update, visible, toggleSection}) => {

    return (
        <form style={{display: `${visible ? 'block' : 'none'}`}}>
            {formInfo.map(info => {
                return <FormGroup update={update} key={info.id} formInfo={info}/>
            })}
            {formInfo[0].htmlFor === 'school' || formInfo[0].htmlFor === 'companyName' ?
                    <div className="d-grid gap-2">
                         <Button text='Add' type='button' toggleSection={toggleSection} className="btn btn-success mt-3"/>
                    </div> 
                    :''}
            <div className="d-grid gap-2">
                <Button text='Submit' type='submit' toggleSection={toggleSection} className="btn btn-primary my-3"/>
            </div>
        </form>
    )
}

export default Form