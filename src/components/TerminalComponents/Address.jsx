import React from 'react'
import './select.scss'
import {ReactComponent as Map} from '../../assets/icons/location.svg'
import Divider from '../Divider/Divider'
import { Row, Col } from 'react-bootstrap'

const Address = () => {
  return (
    <div className="address mt-20">
        <h4 className="text-grey fs-20 fw-700">Delivery Address</h4>
        <div className="d-flex justify-content-between mt-20 mb-15">
            <div className="d-flex justify-content-start">
                <Map className="mt-02" />
                <div className="ml-30">
                    <h4 className="text-darker fs-16 fw-700">5, Ogudu Road, Ojota Lagos</h4>
                    <h4 className="text-grey fs-16 fw-400">+234 8123938493</h4>
                </div>
            </div>

            <div>
                <button className="change-button">
                    CHANGE
                </button>
            </div>
        </div>

        <Divider />

        <Row className="mt-20">
            <Col lg={4}>
                <h4 className="text-grey fs-16 fw-400">Once you tap the continue button below, you will have the option to pay for this device in full or in part payments. <br /><br /> Part payment will require a minimum of 50% upfront and the 50% is to be paid over the 30 days.</h4>
            </Col>
        </Row>
    </div>
  )
}

export default Address