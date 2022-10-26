import Header from './Components/MainHeader'
import AppSection from './Components/AppSection';
import EmptyCV from './Components/RenderCV/EmptyCV'
import {useState} from 'react'

function App() {

  const [general, setGeneral] = useState([
    {id: 1, htmlFor: 'name', value: '', inputType: 'text', label: 'Name'},
    {id: 2, htmlFor: 'email', value: '', inputType: 'email', label: 'Email'},
    {id: 3, htmlFor: 'telephone', value: '', inputType: 'tel', label: 'Phone Number'}
  ])

  const [education, setEducation] = useState([
    {id: 5, htmlFor: 'school', value: '', inputType: 'text', label: 'School Name'},
    {id: 6, htmlFor: 'subject', value: '', inputType: 'text', label: 'Subject of Study'},
    {id: 7, htmlFor: 'date', value: '', inputType: 'date', label: 'Date of Study'}
  ])

  const [experience, setExperience] = useState([
    {id: 8, htmlFor: 'companyName', value: '', inputType: 'text', label: 'Company Name'},
    {id: 9, htmlFor: 'title', value: '', inputType: 'text', label: 'Position Title'},
    {id: 10, htmlFor: 'tasks', value: '', inputType: 'textarea', label: 'Describe Main Tasks & Responsibilites'},
    {id: 11, htmlFor: 'dateFrom', value: '', inputType: 'date', label: 'Date From'},
    {id: 12, htmlFor: 'dateTo', value: '', inputType: 'date', label: 'Date To'},
  ])

  const [generalVisible, setGeneralVisible] = useState(true)
  const [educationVisible, setEducationVisible] = useState(true)
  const [experienceVisible, setExperienceVisible] = useState(true)

  const updateGeneral = (input, id) => {
    setGeneral(general.map(info => info.id === id ? {...info, value: input} : info))
  }
  const updateEducation = (input, id) => {
    setEducation(education.map(info => info.id === id ? {...info, value: input} : info))
  }
  const updateExperience = (input, id) => {
    setExperience(experience.map(info => info.id === id ? {...info, value: input} : info))
  }

  const toggleGeneralSection = (e) => {
    e.preventDefault()
    setGeneralVisible(!generalVisible)
  }
  const toggleEducationSection = (e) => {
    e.preventDefault()
    setEducationVisible(!educationVisible)
  }
  const toggleExperienceSection = (e) => {
    e.preventDefault()
    setExperienceVisible(!experienceVisible)
  }

  return (
    <div className="container">
      <Header />
      <AppSection update={updateGeneral} formInfo={general} sectionTitle='General' visible={generalVisible} toggleSection={toggleGeneralSection}/>
      <AppSection update={updateEducation} formInfo={education} sectionTitle='Education' visible={educationVisible} toggleSection={toggleEducationSection}/>
      <AppSection update={updateExperience} formInfo={experience} sectionTitle='Experience' visible={experienceVisible} toggleSection={toggleExperienceSection}/>
      <EmptyCV general={general} education={education} experience={experience}/>
    </div>
  );
}

export default App;
