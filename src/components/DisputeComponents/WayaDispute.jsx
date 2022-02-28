import React from 'react'
import './dispute.scss'
import { Row, Col, Table, Container } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {ReactComponent as Check} from '../../assets/icons/checkgreen.svg'
import {AiFillEye} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import WayaCards from './WayaCards'


const WayaDispute = () => {
    return (
      <>
      <div className="tableHeaders d-flex justify-content-start align-items-center">
          <div className="d-flex justify-content-between filter-contents align-items-center">
              <div className="d-flex justify-content-start align-items-center width-50">
                  <div className="d-flex justify-content-center align-items-center ">
                      <div className="d-flex justify-content-center align-items-center ">
                          <IoFilterOutline size={15} style={{marginRight:15}} />
                          <h4 className="fs-14 text-darker mt-05">Filter</h4>
                      </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center filter-search">
                      <div className="input_Search d-flex justify-content-center align-items-center">
                          <div className="justify-content-center align-items-center"><FiSearch color="#FF4400" /></div>
                          <input className="input ml-10" placeholder="search with reference id" />
                      </div>
                  </div>
              </div>
              <div className="d-flex justify-content-start align-items-center ">
                  <div className="d-flex justify-content-center align-items-center ">
                      <div className="export-button">
                          <BiLinkExternal color={'#fff'} className="mr-5" />
                          Export data
                      </div>
                  </div>
              </div>
              </div>
          </div>
  
          <Container fluid>
              <Row className="mt-40">
                  <Col>
                      <WayaCards color="text-orange" title="DISPUTE NEED RESPONSE" number="2"/>
                  </Col>
                  <Col>
                      <WayaCards color="text-sharp-green" title="WON DISPUTE" number="1" />
                  </Col>
                  <Col>
                      <WayaCards color="text-deep-grey" title="LOST DISPUTE" number="1"/>
                  </Col>
                  <Col>
                      <WayaCards color="text-orange" title=" DISPUTE UNDER RIVIEW" number="1" />
                  </Col>
              </Row>
  
              <div className="data-table mt-40">
                  <Table responsive borderless className="bg-inherit">
                      <thead>
                          <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                              <th>status</th>
                              <th>Dispute Type</th>
                              <th>Transaction</th>
                              <th>Customer</th>
                              <th>Date Created</th>
                              <th>Due When</th>
                              <th>action</th>
                          </tr>
                      </thead>
  
                      <tbody>
                          <tr>
                              <td><div className="res-button bg-red">Need Response</div></td>
                              <td>Chargeback</td>
                              <td>NGN100 on Jul. 12, 2021</td>
                              <td>email@example.com</td>
                              <td>August 12, 2021</td>
                              <td>In A Day</td>
                              <td><span className="tabactive"><Check className="mr-02" />Resolve</span> </td>
                          </tr>
  
                          <tr>
                              <td><div className="res-button bg-green">Won</div></td>
                              <td>Chargeback</td>
                              <td>NGN100 on Jul. 12, 2021</td>
                              <td>email@example.com</td>
                              <td>August 12, 2021</td>
                              <td>In A Day</td>
                              <td><span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span><span className="actionDanger ml-10"><MdDelete size={20} color="#FF4400" /></span></td>
                          </tr>
  
                          <tr>
                              <td><div className="res-button bg-orange">Under Review</div></td>
                              <td>Chargeback</td>
                              <td>NGN100 on Jul. 12, 2021</td>
                              <td>email@example.com</td>
                              <td>August 12, 2021</td>
                              <td>In A Day</td>
                              <td><span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span><span className="actionDanger ml-10"><MdDelete size={20} color="#FF4400" /></span></td>
  
                          </tr>
  
                          <tr>
                              <td><div className="res-button bg-dark">Lost</div></td>
                              <td>Chargeback</td>
                              <td>NGN100 on Jul. 12, 2021</td>
                              <td>email@example.com</td>
                              <td>August 12, 2021</td>
                              <td>In A Day</td>
                              <td><span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span><span className="actionDanger ml-10"><MdDelete size={20} color="#FF4400" /></span></td>
  
                          </tr>
  
                          <tr>
                              <td><div className="res-button bg-green">Won</div></td>
                              <td>Chargeback</td>
                              <td>NGN100 on Jul. 12, 2021</td>
                              <td>email@example.com</td>
                              <td>August 12, 2021</td>
                              <td>In A Day</td>
                              <td><span className="tabactive"><Check className="mr-02" />Resolve</span> </td>
  
                          </tr>
                      </tbody>
                  </Table>
              </div>
          </Container>
      </>
    )
}

export default WayaDispute