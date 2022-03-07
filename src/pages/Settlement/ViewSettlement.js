import React from 'react'
import Layout from '../../components/Layout/Layout'
import {ReactComponent as Back} from '../../assets/icons/back.svg'
import { Row, Col, Table, Container } from 'react-bootstrap'
import Cards from '../../components/Cards/Cards'
import { useNavigate } from 'react-router'

const ViewSettlement = () => {
    const navigate = useNavigate()
  return (
    <Layout title="Settlements">
        <Container>
            <div className="font-default address">
                <h4 className="text-darker fs-14 fw-700 cursor-pointer" onClick={()=>navigate(-1)}>
                    <span className="mr-15"><Back /></span>
                    Back 
                </h4>

                <Row className="mt-20">
                    <Col>
                        <Cards cardTitle="Settled Amount" value="NGN 98.50" color="text-orange" textColor="text-darker" size="fs-14"/>
                    </Col>
                    <Col>
                        <Cards cardTitle="Activity" value="1 Transactions, 0 Deductions" color="text-orange" textColor="text-darker" size="fs-14"/>
                    </Col>
                    <Col>
                        <Cards cardTitle="Completed on" value="Monday, August 16, 2021" color="text-orange" textColor="text-darker" size="fs-14"/>
                    </Col>
                    <Col>
                        <Cards cardTitle="Settlement Account" value="2723239237" date="United Bank of Nigeria (UBA)" color="text-orange" textColor="text-darker" size="fs-14"/>
                    </Col>
                </Row>

                <div className="data-table mt-40">
                    <Table responsive borderless className="bg-inherit">
                        <thead>
                            <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                                <th>Reference Id</th>
                                <th>Actual Amount</th>
                                <th>Wayapos Fees</th>
                                <th>Settled Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>44aa22f4-fc64-5b</td>
                                <td>NGN 100.00</td>
                                <td>1.50</td>
                                <td>NGN 98.50</td>
                                <td>Tuesday, 6 July 2021, 7:30pm</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    </Layout>
  )
}

export default ViewSettlement