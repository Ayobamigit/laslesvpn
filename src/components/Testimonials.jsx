import React, { useEffect, useState } from 'react'
import Subscribe from './Subscribe'
import TestimonalSlider from './TestimonalSlider/TestimonalSlider'
import Image from '../assets/img/test1.png'
import Image1 from '../assets/img/test2.png'
import Image2 from '../assets/img/test3.png'
import Controls from './Controls'

const Testimonials = () => {
  const [touchPosition, setTouchPosition] = useState(null)
  const [state, setState] = useState({
    index: 0,
    length: 0,
    show: 3,
    testimonials:[
      {
        id: 1,
        name: 'Viezh Robert',
        location: 'Warsaw, Poland',
        comment:'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
        image: Image
      },
      {
        id: 2,
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        comment:'“I like it because I like to travel far and still can connect with high speed.”.',
        image: Image1
      },
      {
        id: 3,
        name: 'Kim Young Jou',
        location: 'Seoul, South Korea',
        comment:'“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
        image: Image2
      },
      {
        id: 4,
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        comment:'“I like it because I like to travel far and still can connect with high speed.”.',
        image: Image1
      }
    ]
  })

  const {testimonials, index, length, show} = state

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        next()
    }

    if (diff < -5) {
        prev()
    }

    setTouchPosition(null)
}


  useEffect(()=>{
    setState(state=>({
      ...state,
      length: testimonials.length
    }))
  },[testimonials])

  const next = () => {
    if (index < (length - show)) {
      setState(state=>({
        ...state,
        index: index + 1
      }))
    }
}

const prev = () => {
  if (index > 0) {
    setState(state=>({
      ...state,
      index: index - 1
    }))
  }
}

  return (
    <div className='bg-map-bg'>
        <div className="pt-16 xs:px-8 px-36">
           <div className='text-center ' >
               <h3 className='text-4xl font-medium text-primary-font leading-[4.3rem]'>Trusted by Thousands of <br />Happy Customer</h3>
               <p className='text-secondary-font text-base font-light leading-[1.875rem] mt-5'>These are the stories of our customers who have joined us with great<br/> pleasure when using this crazy feature.</p>
           </div>

           <TestimonalSlider testimonials={testimonials} index={index} show={show} handleTouchStart={handleTouchStart} handleTouchMove={handleTouchMove} />
           <Controls testimonials={testimonials} next={next} prev={prev}/>

           <Subscribe />
        </div>
    </div>
  )
}

export default Testimonials