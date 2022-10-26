import React from 'react';
import FormGroup from './FormGroup';
import Button from './Button'

const Form = ({formInfo, update, visible, toggleSection, buttonVisible}) => {

    return (
        <form style={{display: `${visible ? 'block' : 'none'}`}}>
            {formInfo.map(info=> {
                return (
                <div>
                    <FormGroup update={update} key={info.id} formInfo={info}/>
                </div>)
            })}

            {(formInfo[0].htmlFor === 'school' || formInfo[0].htmlFor === 'companyName') && buttonVisible ?
                    <div className="d-grid gap-2">
                         <Button text='Add' type='button' toggleSection={toggleSection} className="btn btn-success mt-3"/>
                    </div>
                    :''}
            {buttonVisible ? 
                <div className="d-grid gap-2">
                    <Button text='Submit' type='submit' toggleSection={toggleSection} className="btn btn-primary my-3"/>
                </div> :
                ''
            }
        </form>
    )
}

export default Form