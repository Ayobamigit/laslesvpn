import React, { useContext } from 'react'
import { AddTerminalContext } from '../../pages/Terminals/AddTerminal'
import SubmitLoader from '../SubmitLoader/SubmitLoader'
import './select.scss'

const SubTotal = () => {
  const {state:{step, buttonValue, subTotal, loading}, onChangeStep, makePayment} = useContext(AddTerminalContext)
  return (
    <div className="address font-default mt-20">
        <div className="d-flex justify-content-between">
            <h4 className="fs-18 text-grey fw-700">Sub Total</h4>
            <h4  className="fs-16 text-orange fw-700">₦ {subTotal}</h4>
        </div>

        <div className="text-center mt-20">
          {
            step === 'select' ?
            <button className="orange-button extra-padding"  onClick={()=>onChangeStep('pay', 'Pay now')}>
                {buttonValue}
            </button>
            :
            <button className="orange-button extra-padding"  onClick={makePayment}>
              {
                loading ? 
                <SubmitLoader />
                :
                buttonValue
              }
            </button>
          }
        </div>
        
    </div>
  )
}

export default SubTotal