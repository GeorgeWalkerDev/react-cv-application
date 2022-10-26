import React from 'react'

const FormGroup = ({ formInfo, update }) => {

    if (formInfo.inputType === 'textarea') {
        return (
            <div className="form-group mt-4">
                <label className="form-label" htmlFor={formInfo.htmlFor}>{formInfo.label}</label>
                <textarea onChange={(e) => update(e.target.value, formInfo.id)} className="form-control" type={formInfo.inputType} value={formInfo.value} />
            </div>
            )
    }

    return (
    <div className="form-group mt-4">
        <label className="form-label" htmlFor={formInfo.htmlFor}>{formInfo.label}</label>
        <input onChange={(e) => update(e.target.value, formInfo.id)} className="form-control" type={formInfo.inputType} value={formInfo.value} />
    </div>
    )
}

export default FormGroup