import React from 'react'

class Details extends React.Component {
    render(){
        const summary = this.props.general.filter(info => info.htmlFor === 'summary')[0].value;

        // const title = this.props.experience.filter(info => info.htmlFor === 'title')[0].value;

        // const companyName = this.props.experience.filter(info => info.htmlFor === 'title')[0].value;

        // const workSummary = this.props.experience.filter(info => info.htmlFor === 'tasks')[0].value;

        // const workFrom = this.props.experience.filter(info => info.htmlFor === 'dateFrom')[0].value;

        // const workTo = this.props.experience.filter(info => info.htmlFor === 'dateFrom')[0].value;

        return (
            <section className="col-sm-8">
                <section className='mt-3'>
                    <h3 className='text-uppercase'>SUMMARY</h3>
                    <p>{summary ? summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde sed numquam totam! Maiores autem illo laudantium dolores commodi repudiandae atque qui? Aut fuga quidem consectetur voluptas error saepe dolore!'}</p>
                </section>
                <section className='mt-3'>
                    <h3 className='text-uppercase'>WORK EXPERIENCE</h3>
                    {this.props.experience.map((exps, i) => {
                        const title = exps.filter(info => info.htmlFor === 'title')[0].value;
                        const companyName = exps.filter(info => info.htmlFor === 'title')[0].value;
                        const workSummary = exps.filter(info => info.htmlFor === 'tasks')[0].value;
                        const workFrom = exps.filter(info => info.htmlFor === 'dateFrom')[0].value;
                        const workTo = exps.filter(info => info.htmlFor === 'dateFrom')[0].value;
                        return (
                            <section key={Math.floor(Math.random()*10000) + 1}>
                                <p className="fw-bold">{title ? title : 'Job Title'} at {companyName ? companyName : 'Company'}</p>
                                <p className='blue-text'>{workFrom ? workFrom : 'August 2022'} - {workTo ? workTo : 'Present'}</p>
                                <p>{workSummary ? workSummary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, laudantium? Laboriosam ipsa cupiditate consectetur excepturi? Ipsum incidunt nobis suscipit libero consectetur aspernatur autem ducimus corrupti aliquam, recusandae delectus voluptatibus exercitationem.'}</p>
                            </section>
                        )
                    })}

                </section>
            </section>
        )
    }
}

export default Details