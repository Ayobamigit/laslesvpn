import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import './select.scss'
import SlideContent from './SlideContent'
import Nexgo from '../../assets/img/nexgo.svg'
// import Topwise from '../../assets/img/topwise.svg'
import { AddTerminalContext } from '../../pages/Terminals/AddTerminal'


const SelectTerminal = () => {
  const {state:{types}, onAddItem} = useContext(AddTerminalContext)
  console.log(types)
  return (
    <div className="slider-div mt-20">
        <Row>
          {
            types ?
            types.map((type, i)=>{
              return(
                <Col key = {i}>
                  <SlideContent img={Nexgo} content={type} click={onAddItem} />
                </Col>  
              )
              
            })
            :
            null
          }
            

            {/* <Col>
                <SlideContent img={Topwise} />
            </Col> */}
        </Row>
    </div>
  )
}

export default SelectTerminal