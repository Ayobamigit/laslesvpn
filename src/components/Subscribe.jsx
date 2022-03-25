import React from 'react'

const Subscribe = () => {
  return (
    <div className='rounded-lg py-14 px-[70px] xs:px-8 shadow-subscribe mt-10 md:relative md:top-32'>
        <div className='lg:flex justify-between items-center'>
            <div>
                <h2 className='xs:text-2xl text-4xl font-medium text-primary-font xs:leading-[3.2rem] leading-[3.2rem]'>Subscribe Now for <br /> Get Special Features!</h2>
                <p className='text-secondary-font text-base font-light leading-[1.875rem] mt-5 xs:mt-10'>Let's subscribe with us and find the fun.</p>
            </div>
            <div>
                <button className="px-16 py-4 bg-default-red border border-default-red rounded-lg font-bold text-white text-base shadow-button-red xs:mt-10">
                    Subscribe now
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Subscribe