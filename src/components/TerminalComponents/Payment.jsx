import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import {ReactComponent as Home} from '../../assets/icons/home.svg'
import {ReactComponent as Back} from '../../assets/icons/back.svg'
import { AddTerminalContext } from '../../pages/Terminals/AddTerminal'

const Payment = () => {
    const {onChangeStep} = useContext(AddTerminalContext)
  return (
    <div className="font-default address">
        <h4 className="text-darker fs-14 fw-700 cursor-pointer" onClick={()=>onChangeStep('select', 'Continue')}>
            <span className="mr-15"><Back /></span>
            Back 
        </h4>
        <h2 className="text-grey fs-18 fw-700 mt-20">Purchase WayaPOS</h2>

        <div className="mt-40">
            <h4 className="text-darker fs-16 fw-700"> How would you like to pay?</h4>
            <h6 className="text-default fs-12">Please select a preferred payment option</h6>
        </div>
        
        <Row className="mt-40">
            <Col>
                <div className="bg-white payment-option d-flex justify-content-between ">
                    <div className="d-flex justify-content-between "> 
                        <div className="currency-green"> ₦ </div>
                        <div className="mt-02 ml-22">
                            <h4 className="text-darker fs-14 fw-700">Make full payment</h4>
                            <h4 className="text-grey fs-12">Make payment for this device in full</h4>
                        </div>
                    </div>

                    <div></div>
                </div>
            </Col>

            <Col>
                <div className="bg-white payment-option d-flex justify-content-between ">

                    <div className="d-flex justify-content-between "> 
                        <div className="currency-orange"> ₦ </div>
                        <div className="mt-02 ml-22">
                            <h4 className="text-darker fs-14 fw-700">Make part payments</h4>
                            <h4 className="text-grey fs-12">Divide your payments</h4>
                        </div>
                    </div>

                    <div></div>
                </div>
            </Col>
        </Row>

        <div className="mt-40">
            <h4 className="text-darker fs-16 fw-700">Select account to debit</h4>
            <h6 className="text-default fs-12">The total amount will be debited from the</h6>
        </div>

        <Row className="mt-40 mb-15">
            <Col lg={6}>
                <div className="bg-white payment-option d-flex justify-content-between ">
                    <div className="d-flex justify-content-between "> 
                        <div className="currency-grey"> <Home /> </div>
                        <div className="mt-02 ml-22">
                            <h4 className="text-darker fs-14 fw-700">Richard Daniel</h4>
                            <h4 className="text-grey fs-12">1243353213</h4>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-darker fs-16 fw-900 mt-02"><span className="fw-100">₦</span> 235,645.00</h4>
                    </div>
                </div>

            </Col>
        </Row>
    </div>
  )
}

export default Payment