import axios from '../../plugins/axios'
import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import { getunassignedterminals, mapTerminal, unMapTerminal, updateMerchant, viewMerchant, viewMerchantTerminals } from '../../plugins/urls'
import { toast, Slide } from "react-toastify";
import SubmitLoader from '../../components/SubmitLoader/SubmitLoader'
import { useMatch } from 'react-router';


const Merchant = () => {
    const match = useMatch('/merchant/:id');
    const id = match ?  match.params.id : ''
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
        merchantTerminals:[],
        terminalIds: [],
        unAssignIds:[],
        unAssigned:[],
        submit: false,
        removeButton: true,
        addButton: true
    })
    let itemToBeDeleted = 0


    const {removeButton, addButton, states, cities, unAssigned, terminalIds, unAssignIds, submit, address, city, firstname, surname, phoneNumber, dob, email, gender, merchantTerminals, merchantCategoryCode, merchantId, merchantNameAndLocation, merchantState, countryCode, currencyCode, acquiringInstitutionID} = state

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

        //get merchant details
        getMerchantDetails()
        

        //get all unassigned terminals
        getUnAssigned()
      
        //get merchant terminals
        onGetMerchantTerminals()
        
    },[])

    const getUnAssigned = ()=>{
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

    }

    const getMerchantDetails = ()=>{
        axios({
            method: 'post',
            url:`${viewMerchant}`,
            headers:{
                'Content-Type': 'application/json',
            },
            data: id
        })
        .then(res=>{
            if(res.data.respCode === 0){
                const {address, city, firstname, surname, phoneNumber, dob, email, gender, merchantCategoryCode, merchantId, merchantNameAndLocation, countryCode, currencyCode, acquiringInstitutionID} = res.data.respBody

                setState(state=>({
                    ...state,
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
                    merchantState: res.data.respBody.state,
                    merchantNameAndLocation,
                    countryCode,
                    currencyCode,
                    acquiringInstitutionID
                }))
            }
            
        }).catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    }

    const onGetMerchantTerminals = () =>{
        let reqBody = {
            from: '',
            to:'',
            pageNo:1,
            pageSize:10,
            params:{
                id: id
            }
            
        }

        axios({
            method: 'post',
            url:`${viewMerchantTerminals}`,
            data: reqBody
        })
        .then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    merchantTerminals:res.data.respBody
                }))
            }
            
        }).catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    }

    const onChangeTerminalCheckBox = (e) => {
        const id = e.target.value
        const value = parseInt(id)
        // debugger;
        const check = unAssigned.find((terminal) => {
            return terminal.id === value
        })
        // debugger;
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

            if(terminalIds.length === 0){
                setState(state=>({
                    ...state,
                    addButton: true
                }))
            }else{
                setState(state=>({
                    ...state,
                    addButton: false
                }))
            }
        }
    }

    const onRemoveTerminalCheckBox = (e) => {
        const id = e.target.value
        const value = parseInt(id)
        // debugger;
        const check = merchantTerminals.find((terminal) => {
            return terminal.id === value
        })
        // debugger;
        if(check){
            if(unAssignIds.length){
                const exists = unAssignIds.find((terminal, i) => {
                    if(terminal === value){
                        itemToBeDeleted = i;
                        return terminal;
                    }
                })
                if(exists){
                    unAssignIds.splice(itemToBeDeleted, 1)
                } else {
                    unAssignIds.push(check.id)
                }
            } else {
                unAssignIds.push(check.id)
            }

            if(unAssignIds.length === 0){
                setState(state=>({
                    ...state,
                    removeButton: true
                }))
            }else{
                setState(state=>({
                    ...state,
                    removeButton: false
                }))
            }
        }
    }

    const onUpdateMerchant = (e) =>{
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
            url:`${updateMerchant}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false
                }))
                toast.success(`Merchant updated successfully`, {
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
    }

    const onMapTerminals = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
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
                    submit: false,
                    addButton: true,
                    terminalIds:[]
                }))
                toast.success(`Terminal asssigned successfully`, {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                });
                getUnAssigned()
                onGetMerchantTerminals()
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

    const onRemoveTerminals = ()=>{

        setState(state=>({
            ...state,
            submit: true
        }))
        
        let reqBody = {
            merchantID: id,
            terminalIds: unAssignIds
        }

        axios({
            method: 'POST',
            url: `${unMapTerminal}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    removeButton: true,
                    unAssignIds:[]
                }))
                toast.success(`Terminals removed successfully`, {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                });
                getUnAssigned()
                onGetMerchantTerminals()
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
    <Layout title = "Merchants">
        <Container fluid>
            <Row>
                <Col lg={7}>
                    <div className="profile-div profile-padding"> 
                    <h6 className="fs-16  fw-700 mb-15 text-darker">Edit Merchant Details</h6>

                        <form>
                            <Row>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">First Name</label>
                                        <div className="input-container container-disabled">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                value={firstname}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Last Name</label>
                                        <div className="input-container container-disabled">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                value={surname}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Email Address</label>
                                        <div className="input-container container-disabled">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                value={email}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </Col>
                            
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Phone number</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="phoneNumber"
                                                value={phoneNumber}
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
                                        <label className="text-darker fs-14">Gender</label>
                                        <div className="input-container container-disabled">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                value={gender}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Date of birth</label>
                                        <div className="input-container container-disabled">
                                        <input 
                                            className="input" 
                                            type="text" 
                                            value={dob}
                                            disabled
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
                                                value={address}
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
                                        <label className="text-darker fs-14">State</label>
                                        <div className="input-container">
                                        <select 
                                            className="input select" 
                                            type="text" 
                                            name="merchantState"
                                            required
                                            onChange={onChange}
                                        >
                                            <option>{merchantState}</option>
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
                                            <option>{city}</option>
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
                                        <div className="input-container container-disabled">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                value={merchantId}
                                                disabled
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
                                                value={merchantCategoryCode}
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
                                        <label className="text-darker fs-14">Merchant Name and Location</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="merchantNameAndLocation"
                                                value={merchantNameAndLocation}
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>  
                                </Col>
                            
                                <Col>
                                    <div className="input-div">
                                        <label className="text-darker fs-14">Country Code</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="countryCode"
                                                value={countryCode}
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
                                        <label className="text-darker fs-14">Currency Code</label>
                                        <div className="input-container">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="currencyCode"
                                                value={currencyCode}
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
                                                value={acquiringInstitutionID}
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>  
                                </Col>
                            </Row>

                            
                        </form>

                        <div className="text-end mt-40">
                    <button className="orange-button" onClick={onUpdateMerchant}>
                        {
                            submit ?
                            <SubmitLoader />
                            :
                            'Update Merchant'
                        }
                        
                    </button>
                </div>
                    </div>
                </Col>

                <Col lg={5}>
                    {
                        merchantTerminals ?
                        merchantTerminals.length !==0 ?
                            <div className="profile-div profile-padding mb-30"> 
                            <h6 className="fs-16 fw-700 mb-15 text-darker">Merchant Terminals</h6>

                            {
                                merchantTerminals.map((terminal, i)=>{
                                        return (
                                            <div className="d-flex align-items-center mb-6" key={i}>
                                                <label className="checkbox checkbox-lg checkbox-primary flex-shrink-0 mr-4">
                                                <input type="checkbox" onChange={onRemoveTerminalCheckBox} value={terminal.id} />
                                                {/* <input type="checkbox"  value={permission.name} /> */}
                                                <span></span>  
                                                </label>
                                                <div className="d-flex flex-column flex-grow-1 py-2">
                                                    <h3 className='mb-1 permission'>{terminal.terminalId}</h3>
                                                </div>
                                            </div>
                                        )
                                    })
                            }

                            
                            <div className="text-end mt-40">
                                <button className="orange-button" onClick={onRemoveTerminals} disabled={removeButton}>
                                        {
                                            submit ?
                                            <SubmitLoader />
                                            :
                                            'Remove Terminal'
                                        }
                                        
                                    </button>
                                </div>
                            </div>
                        :
                        null
                        :
                        null
                    }
                    
                    {
                        unAssigned ?
                        unAssigned.length !== 0 ?
                        <div className="profile-div profile-padding"> 
                            <h6 className="fs-16 fw-700 mb-15 text-darker">Add More Terminals</h6>

                            {
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

                            }

                            <div className="text-end mt-40">
                                <button className="orange-button" onClick={onMapTerminals} disabled={ addButton}>
                                    {
                                        submit ?
                                        <SubmitLoader />
                                        :
                                        'Add Terminals'
                                    }
                                    
                                </button>
                            </div>
                        </div>
                        :null
                        :null
                    }


                                            
                </Col>

                
            </Row>
        </Container>
    </Layout>
  )
}

export default Merchant