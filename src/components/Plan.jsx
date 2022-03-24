import React, { useState } from 'react'
import PlanType from './PlanType'

const Plan = () => {
    const [state, setState] = useState({
        plans:[
            {
                id: 1,
                name: 'Free Plan',
                options: [
                    'Unlimited Bandwith',
                    'Encrypted Connection',
                    'No Traffic Logs',
                    'Works on All Devices'
                ],
                amount: 'Free'
            },
            {
                id: 2,
                name: 'Standard Plan',
                options: [
                    'Unlimited Bandwith',
                    'Encrypted Connection',
                    'Yes Traffic Logs',
                    'Works on All Devices',
                    'Connect Anywhere'
                ],
                amount: '$9 / mo'
            },
            {
                id: 3,
                name: 'Premium Plan',
                options: [
                    'Unlimited Bandwith',
                    'Encrypted Connection',
                    'Yes Traffic Logs',
                    'Works on All Devices',
                    'Connect Anywhere',
                    'Get New Features'

                ],
                amount: '$12 / mo'
            }
        ]
    })

    const {plans} = state
  return (
    <div className='bg-map-bg mt-20 pb-24'>
        <div className="pt-16 pb-12 px-36">
           <div className='text-center' >
               <h3 className='text-4xl font-medium text-primary-font leading-[4.3rem]'>Choose Your Plan</h3>
               <p className='text-secondary-font text-base font-light leading-[1.875rem] mt-5'>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
           </div>
        </div>
        <div className="px-16 md:px-36">
           <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 mt-14'>
               {
                   plans ?
                   plans.map((plan, i)=>{
                    return(
                        <PlanType plan = {plan} key={i} />
                    )
                   })
                   :
                   null

               }
           </div>
        </div>
    </div>
  )
}

export default Plan