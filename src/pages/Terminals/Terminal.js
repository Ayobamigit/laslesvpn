import React, {useEffect, useState} from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import Cards from '../../components/Cards/Cards'
import Layout from '../../components/Layout/Layout'
import {AiFillEye} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {VscAdd} from 'react-icons/vsc'
import { useNavigate } from 'react-router'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import { allTerminals } from '../../plugins/urls'
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import moment from "moment"

const Terminal = () => {
    const navigate = useNavigate()
    
    const [state, setState] = useState({
        terminalList: [],
        from:'',
        to:'',
        pageNo:0,
        pageSize: 20,
    })

    const {from, to, pageNo, pageSize, terminalList} = state;
    useEffect(()=>{
        getTerminals()
    },[])

    const getTerminals = ()=>{
        let reqBody = {
            from,
            to,
            pageNo,
            pageSize
        }

        axios({
            method: 'post',
            url: `${allTerminals}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === '00'){
                setState(state=>({
                    ...state,
                    terminalList: res.data.respBody
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
    <Layout title="Terminals">
        <div className="tableHeaders d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-between filter-contents align-items-center">
                <div className="d-flex justify-content-start align-items-center width-50">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="d-flex justify-content-center align-items-center ">
                            <IoFilterOutline size={15} style={{marginRight:15}} />
                            <h4 className="fs-14 text-darker">Filter</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center filter-search ml-22">
                        <div className="input_Search d-flex justify-content-center align-items-center">
                            <div className="justify-content-center align-items-center"><FiSearch color="#FF4400" /></div>
                            <input className="input ml-10" placeholder="search with reference id" />
                        </div>

                        {/* <div className="d-flex justify-content-center align-items-center filter-search"> */}
                            <button className="orange-button ml-10">Search</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-center ">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="export-button">
                            <BiLinkExternal color={'#fff'} className="mr-5" />
                            Export data
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="request-button" onClick={()=>{navigate('/add-terminal')}}>
                            <VscAdd color={'#fff'} className="mr-5" />
                            Request new terminal
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Container fluid>
            <Row className="mt-40">
                <Col>
                    <Cards cardTitle="Total Issued Terminal" value="3" color="text-darker" textColor="text-darker"/>
                </Col>
                <Col>
                    <Cards cardTitle="Total Active Terminals" value="1" color="text-sharp-green" textColor="text-sharp-green"/>
                </Col>
                <Col>
                    <Cards cardTitle="Total Damaged Terminals" value="1" color="text-semi-dark" textColor="text-semi-dark"/>
                </Col>
                <Col>
                    <Cards cardTitle="Total Suspended Terminals" value="1" color="text-red"/>
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>terminal id</th>
                            <th>terminal name</th>
                            <th>terminal cost</th>
                            <th>amount paid</th>
                            <th>amount left</th>
                            <th>status</th>
                            <th>issued date</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>

                    {
                        terminalList?
                            terminalList.length === 0 ?
                            <NoResultFound />
                            :
                            terminalList.map((terminal, i)=>{
                                const{terminalId, terminalName, terminalAmount, amountPaid, amountLeft, dateCreated, status} = terminal;
                                const statusClass = () =>{
                                    if(status){
                                        if(status.toLowerCase() === 'activated'){
                                            return 'tabactive'
                                        }
                                        else if(status.toLowerCase() === 'deactivated'){
                                            return 'tabdanger'
                                        } 
                                        else if(status.toLowerCase() === 'faulty'){
                                            return 'tabdamaged'
                                        }
                                        else{
                                            return 'tabpending'
                                        }
                                    }
                                }

                                return(
                                    <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{terminalId}</td>
                                    <td>{terminalName}</td>
                                    <td>{terminalAmount}</td>
                                    <td>{amountPaid}</td>
                                    <td>{amountLeft}</td>
                                    <td><span className={`${statusClass()}`}>{status}</span></td>
                                    <td>{ dateCreated ? moment(new Date(dateCreated)).format('D/MM/YYYY') : 'N/A'}</td>
                                    <td  onClick={() => {navigate(`/terminals/${terminalId}`)}}><span className="actionDanger"><AiFillEye size={20} color="#FF4400" /></span></td>
                                </tr>
                                )
                            })
                        :
                        <NoResultFound />
                    } 
                        <tr>
                            <td>12346546785</td>
                            <td>Top Wise</td>
                            <td>NGN 50,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td><span className="tabactive">ACTIVE</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="actionDanger"><AiFillEye size={20} color="#FF4400" /></span></td>
                        </tr>

                        <tr>
                            <td>12346546785</td>
                            <td>Top Wise</td>
                            <td>NGN 50,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td><span className="tabdamaged">INACTIVE (DAMAGED)</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="actionDanger"><AiFillEye size={20} color="#FF4400" /></span></td>
                        </tr>

                        <tr>
                            <td>12346546785</td>
                            <td>Top Wise</td>
                            <td>NGN 50,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td><span className="tabpending">UNDER REVIEW</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="actionDanger"><AiFillEye size={20} color="#FF4400" /></span></td>
                        </tr>

                        <tr>
                            <td>12346546785</td>
                            <td>Top Wise</td>
                            <td>NGN 50,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td>NGN 25,000.00</td>
                            <td><span className="tabdanger">REJECT</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="actionDanger"><AiFillEye size={20} color="#FF4400" /></span></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    </Layout>
  )
}

export default Terminal