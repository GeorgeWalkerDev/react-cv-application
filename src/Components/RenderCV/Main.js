import React from 'react'
import Aside from './Aside'
import Details from './Details'

class Main extends React.Component {
    render(){
        return (
            <main className='row'>
                <Details general={this.props.general} experience={this.props.experience} education={this.props.education}/>
                <Aside general={this.props.general} education={this.props.education}/>
            </main>
        )
    }
}

export default Main