import React from 'react'
import {ReactComponent as Logo} from '../assets/icons/Logo.svg'
import Facebook from '../assets/img/facebook.png'
import Twitter from '../assets/img/twitter.png'
import Insta from '../assets/img/instagram.png'

const Footer = () => {
  return (
    <div className='bg-footer-bg pt-16 pb-12 xs:px-10 px-36'>
        <div className="lg:flex pt-32">
            <div className="lg:w-[67rem] mr-2">
                <Logo />

                <h4 className="text-secondary-font mt-5 font-light leading-8 text-base"><span className='font-medium'>LaslesVPN</span> is a private virtual network that <br /> has unique features and has high security.</h4>

                <div className='mt-8 flex'>
                    <img src={Facebook} alt="img" />
                    <img src={Twitter} alt="img"/>
                    <img src={Insta} alt="img"/>
                </div>

                <p className='text-copyright text-base font-light mt-1'>©2020Lasles<span className='font-medium'>VPN</span></p>
            </div>
            <div className="lg:flex justify-between w-full">
                <div className="flex flex-col xs:mt-10">
                    <h4 className="font-medium text-lg text-primary-font mb-6">Products</h4>
                    <div className="flex flex-col justify-between grow">
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Download</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Pricing</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Locations</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Server</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Countries</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Blog</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h4 className="font-medium text-lg text-primary-font mb-6 xs:mt-10">Engage</h4>
                    <div className="flex flex-col justify-between grow">
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">LaslesVPN ? </p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">FAQ</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Tutorials</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">About Us</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Privacy Policy</p>
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Terms of Service</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h4 className="font-medium text-lg text-primary-font mb-6 xs:mt-10">Earn Money</h4>
                    <div className="flex flex-col justify-between">
                        <p className="text-base font-light text-secondary-font mb-4 cursor-pointer">Affiliate</p>
                        <p className="text-base text-secondary-font font-light mb-4 cursor-pointer">Become Partner</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer