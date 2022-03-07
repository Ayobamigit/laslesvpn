import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './start.scss';
import {ReactComponent as Close} from '../../assets/icons/card_close.svg'

const ExploreCards = () => {
  return (
    <Row className="font-default mt-40">
        <Col>
            <div className="text-center explore-div">
                <h4 className="fs-16 text-deep-grey fw-700">Explore Wayabank</h4>
                <h4 className="fs-12 text-default mt-20">Free internet banking and bills payment </h4>
                <button className="orange-button mt-20">Explore wayabank</button>
                <div className="cancel">
                    <Close />
                </div>
            </div>
        </Col>
        

        <Col>
            <div className="text-center explore-div">
                <h4 className="fs-16 text-deep-grey fw-700">Explore Wagram</h4>
                <h4 className="fs-12 text-default mt-20">Discover beautiful places, people, conversarions, vendors and clients. Chat and call clients, friends and family </h4>
                <button className="orange-button mt-20">Explore wayagram</button>
                <div className="cancel">
                    <Close />
                </div>
            </div>
        </Col>

        <Col>
            <div className="text-center explore-div">
                <h4 className="fs-16 text-deep-grey fw-700">Download our App</h4>
                <h4 className="fs-12 text-default mt-20">Download our mobile application for better experience and to receive custom notifications in real time.</h4>
                <button className="orange-button mt-20">Explore wayagram</button>
                <div className="cancel">
                    <Close />
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default ExploreCards