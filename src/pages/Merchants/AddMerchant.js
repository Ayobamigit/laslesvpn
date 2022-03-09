import axios from '../../plugins/axios'
import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import moment from "moment"
import DatePicker from 'react-datepicker';
import { getunassignedterminals, mapTerminal, registerMerchant } from '../../plugins/urls'
import { toast, Slide } from "react-toastify";
import SubmitLoader from '../../components/SubmitLoader/SubmitLoader'
import { useNavigate } from 'react-router'



const AddMerchant = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        firstname:'',
        surname:'',
        email:'',
        phoneNumber:'',
        gender:'',
        address:'',
        merchantState:'',
        city:'',
        merchantId:'',
        merchantNameAndLocation:'',
        merchantCategoryCode:'',
        countryCode:'',
        currencyCode:'',
        acquiringInstitutionID: '',
        dob:'',
        states:[],
        cities:[],
        terminalIds:[],
        unAssigned:[],
        submit: false
    })
    const [startDate, setStartDate] = useState();
    let itemToBeDeleted = 0


    const {states, cities, unAssigned, terminalIds, submit} = state

    const onChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))

        if (name==="merchantState"){
            getLgaByState(value)
        }

    }

    const onDateChange= date =>{

        //setting the date that would be displayed to the useer
        setStartDate(date);

        if(date){
             const value = moment(new Date(date)).format('YYYY-MM-DD')

            //Setting the date for the request body

            setState(state=>({
                ...state,
                dob: value
            }))
        }
        else{
            setState(state=>({
                ...state,
                dob: ""
            }))
        }
   }

    const getLgaByState = (name)=>{
        // Inside array states, find the state that matches the value of state that was sent from the state input field
        // debugger;
        let value = states.find(state => state.state.name.toLowerCase().match(name.toLowerCase()));

        if(value){
            setState(state=>({
                ...state,
                cities: value.state.locals
            }))
        }else{
            setState(state=>({
                ...state,
                cities: []
            }))
        }
    }

    useEffect(()=>{
        axios({
            method: 'get',
            url:'stateandlga.json'
        })
        .then(response=>{
            setState(state=>({
                ...state,
                states:response.data
            }))
            // console.log(state.states)
        })

        axios({
            method: 'get',
            url:`${getunassignedterminals}`
        })
        .then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    unAssigned:res.data.respBody
                }))
            }
            
        }).catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    },[])

    const onChangeTerminalCheckBox = (e) => {
        const id = e.target.value
        const value = parseInt(id)
        // debugger;
        const check = unAssigned.find((terminal) => {
            return terminal.id === value
        })
        debugger;
        if(check){
            if(terminalIds.length){
                const exists = terminalIds.find((terminal, i) => {
                    if(terminal === value){
                        itemToBeDeleted = i;
                        return terminal;
                    }
                })
                if(exists){
                    terminalIds.splice(itemToBeDeleted, 1)
                } else {
                    terminalIds.push(check.id)
                }
            } else {
                terminalIds.push(check.id)
            }
        }
    }

    const onRegisterMerchant = (e) =>{
        e.preventDefault();
        setState(state=>({
            ...state,
            submit: true
        }))

    const {address, city, firstname, surname, phoneNumber, dob, email, gender, merchantCategoryCode, merchantId, merchantNameAndLocation, merchantState, countryCode, currencyCode, acquiringInstitutionID} = state


        let reqBody = {
            address,
            firstname,
            surname,
            phoneNumber,
            email, 
            gender, 
            merchantCategoryCode,
            merchantId,
            city,
            dob,
            state: merchantState,
            merchantNameAndLocation,
            countryCode,
            currencyCode,
            acquiringInstitutionID
        }

        axios({
            method: 'post',
            url:`${registerMerchant}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                const {id} = res.data.respBody
                 onMapTerminals(id)
            }
        }).catch(err=>{
            setState(state=>({
                ...state,
                submit: false
            }))
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    }

    const onMapTerminals = (id)=>{
        let reqBody = {
            merchantID: id,
            terminalIds
        }

        axios({
            method: 'POST',
            url: `${mapTerminal}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false
                }))
                toast.success(`Merchant created successfully`, {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                });
                navigate('/merchants')
            }else{
                setState(state=>({
                    ...state,
                    submit: false
                }))
                toast.error(`${res.data.respDesc}`, {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                });  
            }
        }).catch(err=>{
            setState(state=>({
                ...state,
                submit: false
            }))
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
        console.log('map')
    }
  return (
    <Layout title="Add Merchant">
        <Container fluid>
            <Row>
                <Col lg={8}>
                    <div className="profile-div profile-padding"> 
                    <h6 className="fs-16  fw-700 mb-15 text-darker">Merchant Details</h6>

                        <form>
                            <Row>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">First Name</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="firstname"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Last Name</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="surname"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Email Address</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="email"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Phone number</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="phoneNumber"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Gender</label>
                                        <div className="input-container">
                                            <select 
                                                className="input select" 
                                                type="text" 
                                                name="gender"
                                                required
                                                onChange = {onChange}
                                            >
                                                <option>Select Gender</option>
                                                <option value="Female">Female</option>
                                                <option value="Male">Male</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Date of birth</label>
                                        <div className="input-container">
                                        <DatePicker 
                                            dateFormat="yyyy-MM-dd"
                                            placeholderText="Select date"
                                            onChange={date => onDateChange(date)}
                                            isClearable  
                                            selected={startDate} 
                                            className="input"  
                                            wrapperClassName="datePicker"
                                            required
                                                                    
                                        />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Address</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="address"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>  
                                </Col>
                                

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">State</label>
                                        <div className="input-container">
                                        <select 
                                            className="input select" 
                                            type="text" 
                                            name="merchantState"
                                            required
                                            onChange={onChange}
                                        >
                                            <option>Select state</option>
                                            {
                                                states ? 
                                                states.map((state, i)=>{
                                                    return  <option
                                                        value={state.state.name}
                                                        key={i}
                                                    >
                                                        {state.state.name}
                                                    </option>
                                                })
                                                :
                                                null
                                            }
                                        </select>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">State</label>
                                        <div className="input-container">
                                        <select 
                                            className="input select" 
                                            type="text" 
                                            name="city"
                                            required
                                            onChange={onChange}
                                        >
                                            <option>Select City</option>
                                            {
                                                cities ? 
                                                cities.map((city, i)=>{
                                                    return  <option
                                                        value={city.name}
                                                        key={i}
                                                    >
                                                        {city.name}
                                                    </option>
                                                })
                                                :
                                                null
                                            }
                                        </select>
                                        </div>
                                    </div>
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Merchant ID</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="merchantId"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Merchant Category Code</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="merchantCategoryCode"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Merchant Name and Location</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="merchantNameAndLocation"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>  
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Country Code</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="countryCode"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Currency Code</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="currencyCode"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Acquiring Institution ID</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="acquiringInstitutionID"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>  
                                </Col>
                            </Row>

                            
                        </form>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="profile-div profile-padding"> 
                        <h6 className="fs-16 fw-700 mb-15 text-darker">Map Terminals</h6>

                        {
                            unAssigned ?
                            unAssigned.map((terminal, i)=>{
                                    return (
                                        <div className="d-flex align-items-center mb-6" key={i}>
                                            <label className="checkbox checkbox-lg checkbox-primary flex-shrink-0 mr-4">
                                            <input type="checkbox" onChange={onChangeTerminalCheckBox} value={terminal.id} />
                                            {/* <input type="checkbox"  value={permission.name} /> */}
                                            <span></span>  
                                            </label>
                                            <div className="d-flex flex-column flex-grow-1 py-2">
                                                <h3 className='mb-1 permission'>{terminal.terminalId}</h3>
                                            </div>
                                        </div>
                                    )
                                })
                            :
                            null

                        }
                    </div>
                                            
                </Col>

                <div className="text-end mt-40">
                    <button className="orange-button" onClick={onRegisterMerchant}>
                        {
                            submit ?
                            <SubmitLoader />
                            :
                            'Add Merchant'
                        }
                        
                    </button>
                </div>
            </Row>
        </Container>
    </Layout>
  )
}

export default AddMerchant