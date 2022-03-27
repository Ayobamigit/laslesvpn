import React, { useContext } from 'react'
import {ReactComponent as Logo} from '../assets/icons/Logo.svg'
import { LandingPageContext } from '../pages/LandingPage'

const Nav = () => {
    const {showModal, signOut, state:{login}} = useContext(LandingPageContext)
  return (
    <div className='pt-11 xs:px-8 px-36 w-full'>
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
            <div className="block md:flex items-center justify-end basis-2/5">
                {
                    !login ?
                    <button className="block ml-10 md:inline border-none text-primary-font text-base mr-8 font-medium" onClick={()=>showModal('sign-in')}>Sign in</button>
                    :
                    <button className="block md:inline border-none text-primary-font text-base mr-8 font-medium" onClick={signOut}>Sign out</button>

                }
                {
                    !login ?
                    <button className="px-11 py-3 bg-transparent border border-bright-red rounded-3xl mt-4 md:mt-0 font-medium text-bright-red text-base" onClick={()=>showModal('sign-up')}>Sign up</button>
                    :
                    null
                }
            </div>
        </nav>
        
    </div>
  )
}

export default Nav