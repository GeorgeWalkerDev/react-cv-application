import React from 'react';
import FormGroup from './FormGroup';
import Button from './Button'

const Form = ({formInfo, update, visible, toggleSection, sectionTitle, addExperience}) => {

    return (
        <form style={{display: `${visible ? 'block' : 'none'}`}}>
            {sectionTitle === 'Experience' ? formInfo.map(info => {
                return info.map(input => {
                    return (
                        <FormGroup update={update} key={input.id} formInfo={input}/>
                    )
                })
            }) :
                formInfo.map((info)=> {
                    return (
                        <FormGroup update={update} key={info.id} formInfo={info}/>
                    )
                })
            }

            {(sectionTitle === 'Experience') ?
                    <div className="d-grid gap-2">
                         <Button text='Add' type='button' onClick={addExperience} className="btn btn-success mt-3"/>
                    </div>
                    :''}
                <div className="d-grid gap-2">
                    <Button text='Submit' type='submit' onClick={toggleSection} className="btn btn-primary my-3"/>
                </div>
        </form>
    )
}

export default Form