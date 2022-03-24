import React from 'react'
import {ReactComponent as Box} from '../assets/icons/box.svg'
import {ReactComponent as Check} from '../assets/icons/check-fill.svg'

const PlanType = (props) => {
    const {plan} = props
  return (
    <div className='bg-white border-2 border-plan py-12 px-[80px] rounded-xl max-w-sm md:max-w-md'>
    {/* <div className='bg-white border-2 border-default-red py-12 px-[80px] rounded-xl max-w-sm md:max-w-md'> */}
        <div className='text-center mt-14'>
            <Box className='inline' />
        </div>

        <div className='text-center mt-10'>
            <h2 className='text-lg font-primary-font font-medium'>{plan ? plan.name : ''}</h2>
        </div>

        <div className='mt-10 min-h-[17rem]' >
            {
                plan ?
                plan.options ?
                plan.options.map((option, i)=>{
                    return(
                        <p key={i} className="text-sm text-secondary-font font-regular mb-6">
                            <Check className='inline mr-8' />
                            {option}
                        </p>
                    )
                })
                :
                null
                :
                null
            }

        </div>

        <div className='text-center mt-10'>
            <h2 className='text-2xl font-primary-font font-medium'>{plan ? plan.amount : ''}</h2>
        </div>

        <div className='text-center mt-10'>
            <button className="px-16 py-3 bg-transparent border border-default-red rounded-3xl font-bold text-default-red text-base">
            {/* <button className="px-16 py-3 bg-default-red border border-default-red rounded-3xl font-bold text-white text-base shadow-button-red"> */}

                Select
            </button>
        </div>
    </div>
  )
}

export default PlanType