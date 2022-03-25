import React from 'react'
import Subscribe from './Subscribe'

const Testimonials = () => {
  return (
    <div className='bg-map-bg'>
        <div className="pt-16 xs:px-8 px-36">
           <div className='text-center ' >
               <h3 className='text-4xl font-medium text-primary-font leading-[4.3rem]'>Trusted by Thousands of <br />Happy Customer</h3>
               <p className='text-secondary-font text-base font-light leading-[1.875rem] mt-5'>These are the stories of our customers who have joined us with great<br/> pleasure when using this crazy feature.</p>
           </div>

           <Subscribe />
        </div>
    </div>
  )
}

export default Testimonials