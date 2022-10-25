import React from 'react'
import Form from './Form'
import Button from './Button'

const AppSection = ({formInfo, update, sectionTitle, visible, toggleSection}) => {
  return (
    <section className="container border-top pt-3">
      <h2 className='justify-content-between d-flex'>{sectionTitle} <Button className="btn btn-secondary" text="Update" toggleSection={toggleSection} visible={!visible}/></h2>
      <Form update={update} formInfo={formInfo} visible={visible} toggleSection={toggleSection}/>
    </section>
  )
}

export default AppSection