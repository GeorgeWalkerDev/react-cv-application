import React from 'react'

class Details extends React.Component {
    render(){
        const summary = this.props.general.filter(info => info.htmlFor === 'summary')[0].value;


        return (
            <section className="col-sm-8">
                <section className='mt-3'>
                    <h3 className='text-uppercase'>SUMMARY</h3>
                    <p>{summary ? summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde sed numquam totam! Maiores autem illo laudantium dolores commodi repudiandae atque qui? Aut fuga quidem consectetur voluptas error saepe dolore!'}</p>
                </section>
                <section className='mt-3'>
                    <h3 className='text-uppercase'>WORK EXPERIENCE</h3>
                    <p>Software Engineer at 100Devs</p>
                    <p className='blue-text'>August 2022 - Present</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, laudantium? Laboriosam ipsa cupiditate consectetur excepturi? Ipsum incidunt nobis suscipit libero consectetur aspernatur autem ducimus corrupti aliquam, recusandae delectus voluptatibus exercitationem.</p>
                </section>
            </section>
        )
    }
}

export default Details