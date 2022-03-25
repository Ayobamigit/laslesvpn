import React from 'react'
import MapImage from '../assets/img/map.png'
import Partners from './Partners'

const Map = () => {
  return (
    <div className='bg-map-bg pb-24'>
        <div className="pt-16 pb-12 xs:px-8 px-36">
           <div className='text-center' >
               <h3 className='text-4xl font-medium text-primary-font leading-[4.3rem]'>Huge Global Network  <br/>of Fast VPN</h3>
               <p className='text-secondary-font text-base font-light leading-[1.875rem] mt-5'>See <span className='font-medium'>LaslesVPN</span> everywhere to make it easier for you when you move <br/> locations.</p>
           </div>
           <div className='text-center mt-28'>
            <img src={MapImage} alt="map" className='hidden md:inline' />
           </div>

           <Partners />
           
        </div>
    </div>
  )
}

export default Map