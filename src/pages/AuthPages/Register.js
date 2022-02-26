import React, {createContext, useEffect, useState} from 'react'
import AuthComponent from '../../components/AuthComponent/AuthComponent'
import AuthContainer from '../../components/AuthComponent/AuthContainer/AuthContainer'
import { useNavigate } from 'react-router-dom';
import BusinessInfo from '../../components/AuthComponent/RegisterForms.js/BusinessInfo';
import axios from '../../plugins/axios';
import { businessTypesList, signUp } from '../../plugins/urls';
import PersonalInfo from '../../components/AuthComponent/RegisterForms.js/PersonalInfo';
import PasswordForm from '../../components/AuthComponent/RegisterForms.js/PasswordForm';
import VerifyOtp from './VerifyOtp';
import { toast, Slide } from "react-toastify";


export const RegisterContext = createContext();

const Register = () => {
  const navigate = useNavigate();
    const [state, setState] = useState({
        step: 'business',
        admin: true,
        submit: false,
        orgName: '',
        orgEmail: '',
        businessType: '',
        orgPhone: '',
        referenceCode: '',
        password:'',
        passwordConfirm:'',
        orgType: '',
        city:'',
        stateOfOrigin:'',
        firstName: '',
        officeAddress: '',
        surname: '',
        phoneNumber:'',
        email: '',
        gender: 'MALE',
        dateOfBirth: "2010-07-10",
        businessTypes:[],
        states:[],
        cities:[]
    })

    const {states, step, admin, email, officeAddress, orgEmail, orgName, orgPhone, orgType, referenceCode, stateOfOrigin, city, password, firstName, surname, gender, dateOfBirth, phoneNumber} = state

    useEffect(()=>{
        axios({
            method: 'get',
            url:`${businessTypesList}`
        }).then(res=>{
            setState(state=>({
                ...state,
                businessTypes: res.data
            }))
        })

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
    },[])

    const onChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))

        if (name==="stateOfOrigin"){
            getLgaByState(value)
        }
    }

    const onClickNext = (value) =>{
        // e.preventDefault();
        
        setState(state =>({
            ...state,
            step:value
        }))

       
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

    const onCreateAccount = (e) =>{
        e.preventDefault();
        setState(state=>({
            ...state,
            submit: true
        }))

        //For personal phone number
        let phone = phoneNumber ? phoneNumber.substring(1, 11) : ''
        let fullNumber  = '234' + phone

        let bizPhone = orgPhone ? orgPhone.substring(1, 11) : ''
        let businessPhone  = '234' + bizPhone

        let reqBody = {
            admin,
            businessType: orgType,
            city,
            dateOfBirth,
            email,
            firstName,
            gender,
            officeAddress,
            orgType,
            orgEmail,
            orgName,
            orgPhone: businessPhone,
            password,
            phoneNumber: fullNumber,
            referenceCode,
            state: stateOfOrigin,
            surname
        }

        axios({
            method: 'post',
            url: `${signUp}`,
            data: reqBody
        }).then(res=>{
            setState(state=>({
                ...state,
                submit: false,
                step: 'otp'
            }))
            toast.success(
                `${res.data.data}`,
                 { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
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

    const renderPages = ()=>{
        switch(step){
            case 'business':
                return <BusinessInfo />;
            case 'personal':
                return <PersonalInfo />;
            case 'password':
                return <PasswordForm />;
            default:
                return <BusinessInfo />
        }
    }
  return (
      <>
      {
          step === 'otp' ?
             <VerifyOtp phoneOrEmail={email} />
          :
            <AuthComponent>
                <AuthContainer>
                    <RegisterContext.Provider value={{
                        onChange,
                        onClickNext,
                        onCreateAccount,
                        state
                    }}>
                        <div className="login-header">
                            <h4 className="fs-16 fw-500 login-text">CREATE YOUR WAYAPOS ACCOUNT</h4>
                        </div>

                        <div className="mt-20 full-width">
                            <form>
                                {renderPages()}

                                
                                <div className="text-center mt-20">
                                    <h4 className="fs-16 fw-400 text-default">Have an account? <span className="text-green cursor-pointer" onClick={()=>navigate('/login')}> Sign In </span></h4>
                                </div>
                            </form>
                        </div>
                    </RegisterContext.Provider>
                </AuthContainer>
            </AuthComponent>
        }
    </>
  )
}

export default Register