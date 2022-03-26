import React from 'react'
import Netflix from '../assets/img/netflix.png'
import Reddit from '../assets/img/reddit.png'
import Amazon from '../assets/img/amazon.png'
import Discord from '../assets/img/discord.png'
import Spotify from '../assets/img/spotify.png'

const Partners = () => {
  return (
    <div className='block text-center lg:flex lg:justify-evenly mt-20 md:items-center'>
        <img src={Netflix} alt="img" className='h-[80px] w-[150px] inline mr-5 lg:mr-0' />
        <img src={Reddit} alt="img" className='h-[40px] w-[140px] inline' />
        <img src={Amazon} alt="img" className='h-[120px] w-[180px] inline' />
        <img src={Discord} alt="img" className='h-[50px] w-[150px] inline mr-5 lg:mr-0' />
        <img src={Spotify} alt="img" className='h-[45px] w-[155px] inline' />
    </div>
  )
}

export default Partners