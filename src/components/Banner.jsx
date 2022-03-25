import React from 'react'
import Nav from './Nav'
import {ReactComponent as User} from '../assets/icons/user.svg'

const Banner = () => {
  return (
    <div className='bg-white'>
        <Nav />
        <div className="pt-11 xs:px-8 px-36 mb-8 lg:mb-4">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='mt-5 text-left'>
                    <h2 className='text-5xl font-medium text-primary-font leading-[4.3rem]'>Want anything to be <br />easy with <span className='font-bold'>LaslesVPN.</span></h2>
                    <p className='text-secondary-font text-base font-light leading-[1.875rem] mt-5'>Provide a network for all your needs with ease and fun using <span className='font-normal'>LaslesVPN</span> <br />discover interesting features from us.</p>
                    <div className='mt-12 '>
                        <button className='bg-default-red text-white text-base rounded-lg text-center py-4 px-[77px] font-medium shadow-button-red' >Get Started</button>
                    </div>
                </div>
                <div className='mt-28 lg:mt-0 hidden md:block'>
                    <User/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner