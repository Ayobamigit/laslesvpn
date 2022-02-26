import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './select.scss'
import SlideContent from './SlideContent'

const SelectTerminal = () => {
  return (
    <div className="slider-div mt-20">
        <Row>
            <Col>
                <SlideContent />
            </Col>

            <Col>
                <SlideContent />
            </Col>
        </Row>
    </div>
  )
}

export default SelectTerminal