import React from 'react'

const EmptyCV = () => {
  return (
    <div className="emptyCV container my-3 border p-3">
        <header>
            <h1>George Walker</h1>
            <h2 className='blue-text'>Software Engineer</h2>
        </header>
        <main className='row'>
            <section className="col-sm-8">
                <section className='mt-3'>
                    <h3 className='text-uppercase'>SUMMARY</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde sed numquam totam! Maiores autem illo laudantium dolores commodi repudiandae atque qui? Aut fuga quidem consectetur voluptas error saepe dolore!</p>
                </section>
                <section className='mt-3'>
                    <h3 className='text-uppercase'>WORK EXPERIENCE</h3>
                    <p>Software Engineer at 100Devs</p>
                    <p className='blue-text'>August 2022 - Present</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, laudantium? Laboriosam ipsa cupiditate consectetur excepturi? Ipsum incidunt nobis suscipit libero consectetur aspernatur autem ducimus corrupti aliquam, recusandae delectus voluptatibus exercitationem.</p>
                </section>
            </section>
            <section className="col-sm-4">
                <section className='mt-3'>
                    <h3 className='text-uppercase'>CONTACT</h3>
                    <p className='blue-text'>Phone number</p>
                    <p className='blue-text'>Email address</p>
                    <p className='blue-text'>Portfolio Website</p>
                    <p className='blue-text'>LinkedIn</p>
                    <p className='blue-text'>Twitter</p>
                </section>
                <section className='mt-3'>
                    <h3 className='text-uppercase'>EDUCATION</h3>
                    <p>School Name</p>
                    <p>Subject of Study</p>
                </section>
            </section>
        </main>
    </div>

  )
}

export default EmptyCV
