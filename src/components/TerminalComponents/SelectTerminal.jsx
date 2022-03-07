import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './select.scss'
import SlideContent from './SlideContent'
import Nexgo from '../../assets/img/nexgo.svg'
import Topwise from '../../assets/img/topwise.svg'


const SelectTerminal = () => {
  return (
    <div className="slider-div mt-20">
        <Row>
            <Col>
                <SlideContent img={Nexgo} />
            </Col>

            <Col>
                <SlideContent img={Topwise} />
            </Col>
        </Row>
    </div>
  )
}

export default SelectTerminal