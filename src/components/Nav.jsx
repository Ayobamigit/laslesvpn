import React from 'react'
import {ReactComponent as Logo} from '../assets/icons/Logo.svg'

const Nav = () => {
  return (
    <div className='pt-11 px-36 w-full'>
        <nav className="max-w-full w-full lg:max-w-full md:max-w-4xl flex flex-row justify-between mb-2">
            <div className='flex justify-between items-center basis-3/5'>
                <div className='basis-2/6'>
                    <Logo />
                </div>
                <div className='basis-4/6 hidden lg:flex items-center justify-between w-full text-secondary-font'>
                    {/* <div className='flex text-secondary-font'> */}
                        <div>
                            <a href='/' > About </a>
                        </div>
                        <div>
                            <a href='/'> Features </a>
                        </div>
                        <div>
                            <a href='/'> Pricing </a>
                        </div>
                        <div>
                            <a href='/'> Testimonials </a>
                        </div>
                        <div>
                            <a href='/' > Help </a>
                        </div>
                    {/* </div> */}
                </div>
                
            </div>
            <div className="flex items-center justify-end basis-2/5">
                <button className="border-none text-primary-font text-base mr-8 font-medium">Sign in</button>
                <button className="px-11 py-3 bg-transparent border border-bright-red rounded-3xl font-medium text-bright-red text-base">Sign up</button>
            </div>
        </nav>
        
    </div>
  )
}

export default Nav