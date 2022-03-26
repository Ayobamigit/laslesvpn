import React from 'react'
import {ReactComponent as Back} from '../assets/icons/back.svg'
import {ReactComponent as Next} from '../assets/icons/front.svg'

const Controls = (props) => {
    const{testimonials, next, prev}=props
  return (
    <div className='mt-16 flex justify-between items-center'>
        <div className='flex'>
            {
                 testimonials ?
                 testimonials.map((testimonial, i)=>{
                  return(
                    <div className='bg-control rounded-full h-3.5 w-3.5 mr-3' key={i}></div>
                )
                  })
                :
                null
            }
        </div>
        <div>
            <button className='border-2 border-default-red p-3 rounded-full mr-4' onClick={prev}>
                <Back />
            </button>

            <button className='border-none bg-default-red text-default-red p-3 rounded-full' onClick={next}>
                <Next />
            </button>
        </div>
    </div>
  )
}

export default Controls