import React from 'react'
import Form from './Form'
import Button from './Button'

const AppSection = ({formInfo, update, sectionTitle, visible, toggleSection, addExperience}) => {

  return (
    <section className="container border-top pt-3">
      <h2 className='justify-content-between d-flex'>{sectionTitle} <Button className="btn btn-secondary" text="Update" onClick={toggleSection} visible={!visible}/></h2>

      <Form sectionTitle={sectionTitle} update={update} formInfo={formInfo} visible={visible} toggleSection={toggleSection} key={formInfo.id} addExperience={addExperience}/>
    </section>
  )
}

export default AppSection