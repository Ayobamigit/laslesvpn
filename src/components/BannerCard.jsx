import React from 'react'
import {ReactComponent as User} from '../assets/icons/dummy.svg'
import {ReactComponent as Server} from '../assets/icons/server.svg'
import {ReactComponent as Location} from '../assets/icons/location.svg'

const BannerCard = () => {
  return (
    <div className='bg-white pt-11 px-36 mb-8 mt-10'>
        <div className='rounded-lg py-9 px-10 shadow-card'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='text-center border-b-2 lg:border-b-0 lg:border-r-2  p-5'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-icon-bg rounded-full h-[55px] w-[55px] p-5 mr-10'>
                            <User />
                        </div>
                        <div>
                            <h3 className='text-primary-font text-2xl font-bold'>90+</h3>
                            <p className='text-secondary-font text-base font-light mt-0.5'>Users</p>
                        </div>
                    </div>
                </div>
                <div className='text-center border-b-2  lg:border-b-0 lg:border-r-2 border-grey p-5'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-icon-bg rounded-full h-[55px] w-[55px] p-5 mr-10'>
                            <Location />
                        </div>
                        <div>
                            <h3 className='text-primary-font text-2xl font-bold'>30+</h3>
                            <p className='text-secondary-font text-base font-light mt-0.5'>Locations</p>
                        </div>
                    </div>
                </div>
                <div className='text-center p-5'>
                    <div className='flex justify-center items-center'>
                        <div className='bg-icon-bg rounded-full h-[55px] w-[55px] p-5 mr-10'>
                            <Server />
                        </div>
                        <div>
                            <h3 className='text-primary-font text-2xl font-bold'>50+</h3>
                            <p className='text-secondary-font text-base font-light mt-0.5'>Servers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default BannerCard