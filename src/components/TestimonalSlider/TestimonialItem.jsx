import React from 'react'
import { ReactComponent as Star } from '../../assets/icons/star.svg'
import Image from '../../assets/img/test1.png'

const TestimonialItem = (props) => {
  const {testimonials} = props
  return (
    <div className='p-8 border-2 border-plan rounded-xl w-[400px] mr-20'>
      <div className='flex justify-between'>
        <div className='flex justify-between items-center'> 
          <img src = {testimonials ? testimonials.image : Image} alt="img" className='mr-5' />
          <div>
            <h2 className='text-lg text-primary-font font-medium'>{testimonials ? testimonials.name : ''}</h2>
            <p className='text-sm text-secondary-font font-regular'>{testimonials ? testimonials.location:''}</p>
          </div>
        </div>
        <div className='flex justify-end items-center'>
          <p className='text-base text-primary-font font-regular mr-4'>4.5</p>
          <Star />
        </div>
      </div>

      <div className='mt-4 min-h-[6rem]'>
        <p className='text-base text-primary-font font-light leading-7'>
        {testimonials ?  testimonials.comment :''}
        </p>
      </div>
    </div>
  )
}

export default TestimonialItem