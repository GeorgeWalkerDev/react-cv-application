import React from 'react'
import Form from './Form'
import Button from './Button'

const AppSection = ({formInfo, update, sectionTitle, visible, toggleSection, formCount}) => {

  const count = [...Array(formCount).keys()]
  const key = Math.floor(Math.random() * 10000)

  return (

    <section className="container border-top pt-3">
      <h2 className='justify-content-between d-flex'>{sectionTitle} <Button className="btn btn-secondary" text="Update" toggleSection={toggleSection} visible={!visible}/></h2>
      {count.map((form, i) => {
        return <Form key={key + i} update={update} formInfo={formInfo} visible={visible} toggleSection={toggleSection}/>
      })}
      {/* <Form update={update} formInfo={formInfo} visible={visible} toggleSection={toggleSection}/> */}
    </section>
  )
}

export default AppSection