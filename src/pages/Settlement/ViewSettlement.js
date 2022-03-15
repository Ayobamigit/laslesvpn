import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import {ReactComponent as Back} from '../../assets/icons/back.svg'
import { Row, Col, Table, Container } from 'react-bootstrap'
import Cards from '../../components/Cards/Cards'
import { useNavigate } from 'react-router'
import { useMatch } from 'react-router';
import { getSettlementDetails } from '../../plugins/urls'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import moment from "moment"

const ViewSettlement = () => {
    const navigate = useNavigate()
    const match = useMatch('/settlement/:id');
    const id = match ?  match.params.id : ''

    const [state, setState] = useState({
        settlementList: '',
        from:'',
        to:'',
        pageNo:0,
        pageSize: 20,
        referenceID:'',
        wayaPosFee:'',
        actualAmount:'',
        settledAmount:'',
        createdAt:'',
        completedON:'',
        settlementAccount:'',
        activity:''
    })

    const {from, to, pageNo, pageSize, settlementList, referenceID, wayaPosFee, actualAmount, settledAmount, createdAt, completedON, settlementAccount, activity} = state;
    useEffect(()=>{
        getSettlement()
    },[])

    const getSettlement = ()=>{
        let reqBody = {
            from,
            to,
            pageNo,
            pageSize,
            id: id
        }

        axios({
            method: 'post',
            url: `${getSettlementDetails}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                const {referenceID, wayaPosFee, actualAmount, settledAmount, createdAt, completedON, settlementAccount, activity} = res.data.respBody
                setState(state=>({
                    ...state,
                    settlementList: res.data.respBody,
                    referenceID,
                    wayaPosFee,
                    actualAmount,
                    settledAmount,
                    createdAt,
                    completedON,
                    settlementAccount,
                    activity
                }))
            }
        })
        .catch(err=>{
        toast.error(`${err.response.data.message}`, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
          });
    })
    }
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
                        <Cards cardTitle="Settled Amount" value={settledAmount} color="text-orange" textColor="text-darker" size="fs-14"/>
                    </Col>
                    <Col>
                        <Cards cardTitle="Activity" value={activity ? activity : '1 Transactions, 0 Deductions'} color="text-orange" textColor="text-darker" size="fs-14"/>
                    </Col>
                    <Col>
                        <Cards cardTitle="Completed on" value={completedON ? moment(new Date(createdAt)).format('LLLL') : "Monday, August 16, 2021" }color="text-orange" textColor="text-darker" size="fs-14"/>
                    </Col>
                    <Col>
                        <Cards cardTitle="Settlement Account" value={settlementAccount} date="United Bank of Nigeria (UBA)" color="text-orange" textColor="text-darker" size="fs-14"/>
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

                            {
                                settlementList?
                                    <tr>
                                        <td>{referenceID ? referenceID : '44aa22f4-fc64-5b'}</td>
                                        <td>{actualAmount}</td>
                                        <td>{wayaPosFee}</td>
                                        <td>{settledAmount}</td>
                                        <td>{ createdAt ? moment(new Date(createdAt)).format('D/MM/YYYY') : 'N/A'}</td>
                                    </tr>
                                :
                                <NoResultFound />
                            } 
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    </Layout>
  )
}

export default ViewSettlement