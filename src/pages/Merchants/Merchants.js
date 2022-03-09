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
import { allMerchants } from '../../plugins/urls'
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import moment from "moment"

const Merchants = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const navigate = useNavigate()
    
    const [state, setState] = useState({
        merchantList: [],
        from:'',
        to:'',
        pageNo:0,
        pageSize: 20,
    })

    const {from, to, pageNo, pageSize, merchantList} = state;
    useEffect(()=>{
        getTerminals()
    },[])

    const getTerminals = ()=>{
        let reqBody = {
            from,
            to,
            pageNo,
            pageSize,
            paramList:[
                {
                 userid: user? user.id : ''
                }
            ]
        }

        axios({
            method: 'post',
            url: `${allMerchants}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    merchantList: res.data.respBody.content
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
    <Layout title="Merchants">
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
                        <div className="request-button" onClick={()=>{navigate('/add-merchant')}}>
                            <VscAdd color={'#fff'} className="mr-5" />
                            Add Merchant
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Container fluid>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>#</th>
                            <th>merchant id</th>
                            <th>merchant name</th>
                            <th>email</th>
                            <th>dob</th>
                            <th>phone number</th>
                            {/* <th>amount left</th>
                            <th>status</th>
                            <th>issued date</th> */}
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>

                    {
                        merchantList?
                            merchantList.length === 0 ?
                            <NoResultFound />
                            :
                            merchantList.map((merchant, i)=>{
                                const{merchantId, firstname, surname, email, phoneNumber, dob} = merchant;
                                // const statusClass = () =>{
                                //     if(status){
                                //         if(status.toLowerCase() === 'activated'){
                                //             return 'tabactive'
                                //         }
                                //         else if(status.toLowerCase() === 'deactivated'){
                                //             return 'tabdanger'
                                //         } 
                                //         else if(status.toLowerCase() === 'faulty'){
                                //             return 'tabdamaged'
                                //         }
                                //         else{
                                //             return 'tabpending'
                                //         }
                                //     }
                                // }

                                return(
                                    <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{merchantId}</td>
                                    <td>{firstname + ' ' + surname }</td>
                                    <td>{email}</td>
                                    <td>{ dob ? moment(new Date(dob)).format('D/MM/YYYY') : 'N/A'}</td>
                                    <td>{phoneNumber}</td>
                                    {/* <td>{amountLeft}</td>
                                    <td><span className={`${statusClass()}`}>{status}</span></td> */}
                                    <td  onClick={() => {navigate(`/merchant/${merchantId}`)}}><span className="actionDanger"><AiFillEye size={20} color="#FF4400" /></span></td>
                                </tr>
                                )
                            })
                        :
                        <NoResultFound />
                    } 
                        {/* <tr>
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
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        </Container>
    </Layout>
  )
}

export default Merchants