import React from 'react'
import {ReactComponent as User} from '../assets/icons/answer.svg'
import {ReactComponent as Check} from '../assets/icons/check.svg'

const Features = () => {
  return (
    <div className='bg-white mt-24'>
        <div className="pt-11 pb-12 xs:px-8 px-36 mb-8">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='mt-28 lg:mt-0 hidden md:block'>
                    <User/>
                </div>

                <div className='mt-20 lg:mt-7 text-left lg:pl-28'>
                    <h2 className='text-4xl font-medium text-primary-font leading-[4.3rem]'>We Provide Many <br />Features You Can Use</h2>
                    <p className='text-secondary-font text-base font-light leading-[1.875rem] mt-5'>You can explore the features that we provide with fun <br /> and have their own functions each feature.</p>
                    <div className='mt-12'>
                        <p className='text-sm text-secondary-font font-light'>
                            <Check className='mr-3 inline' /> Powerfull online protection.
                        </p>

                        <p className='text-sm text-secondary-font font-light mt-5'>
                            <Check className='mr-3 inline' /> Internet without borders.
                        </p>

                        <p className='text-sm text-secondary-font font-light mt-5'>
                            <Check className='mr-3 inline' /> Supercharged VPN
                        </p>

                        <p className='text-sm text-secondary-font font-light mt-5'>
                            <Check className='mr-3 inline' /> No specific time limits.
                        </p>

                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Features