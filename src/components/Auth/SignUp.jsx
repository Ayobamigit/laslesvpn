import React from 'react'

const SignUp = (props) => {
  return (
    <form className='block'>
        <div className='mb-4'>
            <label className='text-sm text-primary-font font-regular mb-2'>Email address:</label>
            <input 
                className='block mt-2 h-11 w-full py-2 px-4 text-sm font-light text-primary-font bg-white rounded-lg border border-grey focus:outline-none'
                type="email"
                name="email"
                onChange={props.onChange}
            />
        </div>
        {props.error ? (<p className="text-sm font-light text-bright-red mb-4" >Please enter a valid email address!</p>) : null}

        <div className='mb-4'>
            <label className='text-sm text-primary-font font-regular'>Password:</label>
            <input 
                className='block mt-2 h-11 w-full py-2 px-4 text-sm font-light text-primary-font bg-white rounded-lg border border-grey focus:outline-none'
                type="password"
                name="password"
                onChange={props.onChange}
            />
        </div>
    </form>
  )
}

export default SignUp