import React from 'react'

class CVHeader extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        const name = this.props.general.filter(info => info.htmlFor === 'name')[0].value
        const title = this.props.experience.filter(info => info.htmlFor === 'title')[0].value

        return (
            <header>
                <h1>{name ? name : 'Full Name'}</h1>
                <h2 className='blue-text'>{title ? title : 'Latest Title'}</h2>
            </header>
        )
    }
}

export default CVHeader