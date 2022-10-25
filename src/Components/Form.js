import React from 'react';
import FormGroup from './FormFieldset';
import Button from './Button'

const Form = ({formInfo, update, visible, toggleSection}) => {

    return (
        <form style={{display: `${visible ? 'block' : 'none'}`}}>
            {formInfo.map(info => {
                return <FormGroup update={update} key={info.id} formInfo={info}/>
            })}
            <div className="d-grid gap-2">
                <Button text='Submit' type='submit' toggleSection={toggleSection} className="btn btn-primary my-3"/>
            </div>
        </form>
    )
}

export default Form