import React from 'react'

class Aside extends React.Component {
    render(){
        const email = this.props.general.filter(info => info.htmlFor === 'email')[0].value;
        const phone = this.props.general.filter(info => info.htmlFor === 'telephone')[0].value;

        return (
            <aside className="col-sm-4">
                <section className='mt-3'>
                    <h3 className='text-uppercase'>CONTACT</h3>
                    <p className='blue-text'>{phone ? phone : 'Phone number'}</p>
                    <p className='blue-text'>{email ? email : 'Email address'}</p>
                    <p className='blue-text'>Portfolio Website</p>
                    <p className='blue-text'>LinkedIn</p>
                    <p className='blue-text'>Twitter</p>
                </section>
                <section className='mt-3'>
                    <h3 className='text-uppercase'>EDUCATION</h3>
                    <p>School Name</p>
                    <p>Subject of Study</p>
                </section>
            </aside>
        )
    }
}

export default Aside