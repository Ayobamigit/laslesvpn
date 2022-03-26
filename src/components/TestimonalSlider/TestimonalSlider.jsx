import React from 'react'
import TestimonialItem from './TestimonialItem'

const TestimonalSlider = (props) => {
    const{testimonials, index, show, handleTouchStart, handleTouchMove} = props
  return (
    <div className='mt-16 flex w-full flex-col'>
        <div className='flex w-full relative'>
            <div className='w-full h-full overflow-hidden' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <div className={`flex transition duration-300 ease-linear carousel-content show-${show}` }style={{ transform: `translateX(-${index * 100}%)` }}>
                {
                   testimonials ?
                   testimonials.map((testimonial, i)=>{
                    return(
                        <TestimonialItem testimonials = {testimonial} key={i} />
                    )
                   })
                   :
                    null

                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonalSlider