import React from 'react'
import './select.scss'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import { ReactComponent as Minus } from '../../assets/icons/minus.svg'
import { Col, Row } from 'react-bootstrap'

const SlideContent = (props) => {
  return (
    <div className="slide-item">
        <Row>
            <Col className="product-bg">
               <img src={props.img} alt="" />
            </Col>
            <Col className="mt-35">
                <h4 className="text-white fs-25 m-0">{props.content.terminalName}</h4>
                <h4 className="text-semi-white fs-14 fw-400">{props.content.terminalCategory}</h4>
                <div className="d-flex justify-content-around mt-20">
                    <div className="action-bg text-center cursor-pointer"  onClick={()=>{props.click(props.content, 'remove')}} >
                        <Minus/>
                    </div>
                    {/* <h4 className="text-white fs-14 mt-02">1</h4> */}
                    <div className="action-bg text-center cursor-pointer" onClick={()=>{props.click(props.content, 'add')}} >
                        <Plus />
                    </div>
                </div>
                <h4 className="text-white fs-20 mt-20">₦ {props.content.amount}</h4>
            </Col>
        </Row>
    </div>
  )
}

export default SlideContent