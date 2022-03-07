import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './start.scss';
import {ReactComponent as Chat} from '../../assets/icons/card_chat.svg'
import {ReactComponent as User} from '../../assets/icons/card_user.svg'
import {ReactComponent as Finger} from '../../assets/icons/card_finger.svg'

const QuickLinks = () => {
  return (
    <Row className="font-default mt-40">
        <Col>
            <div className="text-center link-div">
                <User />
                <h4 className="fs-14 text-darker mt-20">Submit a few KYC details to start accepting payments and receive settlement in your account</h4>
                <button className="orange-button mt-20 br-30">Activate Account</button>
            </div>
        </Col>

        <Col>
            <div className="text-center link-div">
                <Finger />
                <h4 className="fs-14 text-darker mt-20">You can do a quick walkthrough of WayaPOS and how it can help your business by exploring the dashboard.</h4>
                <button className="orange-button mt-20 br-30">Explore the Dashboard</button>
            </div>
        </Col>

        <Col>
            <div className="text-center link-div">
                <Chat />
                <h4 className="fs-14 text-darker mt-20">Find answers to questions you might have or get in touch</h4>
                <button className="orange-button mt-20 br-30">Contact for help</button>
            </div>
        </Col>
        
    </Row>
  )
}

export default QuickLinks
