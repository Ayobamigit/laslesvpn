import React, {useEffect, useState} from 'react'
import {Table, Container } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import axios from '../../plugins/axios'
import { viewActivity } from '../../plugins/urls'
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import moment from "moment"
import { toast, Slide } from "react-toastify"
import DatePicker from 'react-datepicker';

const Activity = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    
    const [state, setState] = useState({
        activities: [],
        pageNo:0,
        pageSize: 20,
    })
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const {pageNo, pageSize, activities} = state;
    useEffect(()=>{
        getActivities()
    },[])

    useEffect(()=>{
        if(startDate && endDate)
        {
          dateFilter();
        }

        if(!startDate && !endDate)
        {
            getActivities();
        }

    }, [startDate, endDate])

    const getActivities = ()=>{
        let reqBody = {
            from: startDate,
            to: endDate,
            pageNo,
            pageSize,
            userID: user? user.id : ''
        }

        axios({
            method: 'post',
            url: `${viewActivity}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    activities: res.data.respBody.content
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

    const clearDateFilter =()=>{
        return null;
    }

    const dateFilter =()=>{
       getActivities()
    }

    const onFilterDateChange = (dates)=>{
        if(dates){
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
        }
    }
  return (
    <Layout title="Activity Log">
        <div className="tableHeaders d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-between filter-contents align-items-center">
                <div className="d-flex justify-content-start align-items-center width-50">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="d-flex justify-content-center align-items-center ">
                            <h4 className="fs-14 fw-700 text-darker">Duration</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center filter-search ml-22">
                        <div className="input-container d-flex justify-content-center align-items-center">
                        <DatePicker 
                            dateFormat="dd-MM-yyyy"
                            placeholderText="dd-mm-yyyy - dd-mm-yyyy"
                            onChange={date => onFilterDateChange(date)}
                            isClearable  
                            selected={startDate} 
                            startDate={startDate} 
                            endDate={endDate} 
                            className="input"  
                            wrapperClassName="datePicker"
                            selectsRange
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Container fluid>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr>
                            <th>Duration</th>
                            <th>Activity</th>
                        </tr>
                    </thead>

                    <tbody>

                    {
                        activities?
                        activities.length === 0 ?
                            <NoResultFound />
                            :
                            activities.map((audit, i)=>{
                                const{duration, activity} = audit;

                                return(
                                    <tr key={i}>
                                    <td>{duration ? moment(duration).calendar() : 'N/A'}</td>
                                    <td>{activity}</td>
                                </tr>
                                )
                            })
                        :
                        <NoResultFound />
                    } 
                    </tbody>
                </Table>
            </div>
        </Container>
    </Layout>
  )
}

export default Activity