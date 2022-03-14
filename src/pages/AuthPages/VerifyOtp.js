import React, { useState } from 'react'
import AuthComponent from '../../components/AuthComponent/AuthComponent'
import AuthContainer from '../../components/AuthComponent/AuthContainer/AuthContainer'
import SubmitLoader from '../../components/SubmitLoader/SubmitLoader'
import { useRef } from "react";
import axios from '../../plugins/axios';
import { createWallet, resend, verify } from '../../plugins/urls';
import { toast, Slide } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const VerifyOtp = (props) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        submit: false,
        verified: false
    })
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const [otp,setOtp]=useState('')

    const {submit, verified} = state;

    const handleChange = (ref,val) => {
        if(val===""){
          ref1.current.value=""
          ref2.current.value=""
          ref3.current.value=""
          ref4.current.value=""
          ref5.current.value=""
          ref6.current.value=""
          setOtp("")
    
        }else{
          setOtp(`${otp}${val}`)
          ref.current.focus();
        }
      
    };

    const handleSubmit=(val)=>{
        if(`${otp}${val}`.length>5){
            setState(state=>({
                ...state, 
                submit: true
            }))
            let reqBody = {
                otp:`${otp}${val}`,
                phoneOrEmail: props.phoneOrEmail
            }
            axios({
                method: 'post',
                url: `${verify}`,
                data: reqBody
            }).then((res) => {
                if (res.data.status === true) {
                    onCreateWallet()
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
        }else{
          setOtp('')
          toast.error(
            `Pls, check fill any missing field`,
             { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
             )
        }
        ref1.current.value=""
        ref2.current.value=""
        ref3.current.value=""
        ref4.current.value=""
        ref5.current.value=""
        ref6.current.value=""
    
    }
    const onResend =()=>{
        axios({
            method: 'get',
            url:`${resend}${props.phoneOrEmail}`
        }).then(res=>{
            toast.success(
            `OTP Sent, kindly check the email or phone number provided`,
                { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
            )
        }).catch((err) => {
            // const err = JSON.parse(e)
            toast.error(`${err.response.data.message}`, {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 3000,
            });
            // console.log(err.response.data.message)
          });
    }

    const onCreateWallet = (id)=>{
        let reqBody = {
            userId: id
        }
        axios({
            method: 'post',
            url:`${createWallet}`,
            data: reqBody
        }).then(res=>{
            if(res.data.status === true){
                setState(state=>({
                    ...state,
                    submit: false,
                    verified: true
                }))
                toast.success(
                  `Account Verified, Kindly login`,
                   { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                  )
            }
        }).catch((err) => {
            // const err = JSON.parse(e)
            toast.error(`${err.response.data.message}`, {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 3000,
            });
            // console.log(err.response.data.message)
          });
    }
  return (
    <AuthComponent>
        <AuthContainer>
            <div className="login-header">
                <h4 className="fs-24 fw-500 login-text">Verify Your Account</h4>

                <h4 className="fs-16 fw-400 text-default mt-20">Please Input the OTP sent to your mobile number.</h4>
            </div>

            <div className="mt-40 full-width">
                <form>
                    <div className="inputsHolder">
                        <div className=" d-flex justify-content-between full-width text-center">
                            <input type="number" className='single'  ref={ref1} onKeyUp={(e)=>handleChange(ref2,e.target.value)}/>
                            <input type="number" className='single'  ref={ref2} onKeyUp={(e)=>handleChange(ref3,e.target.value)}/>
                            <input type="number" className='single'  ref={ref3} onKeyUp={(e)=>handleChange(ref4,e.target.value)}/>
                            <input type="number" className='single'  ref={ref4} onKeyUp={(e)=>handleChange(ref5,e.target.value)}/>
                            <input type="number" className='single'  ref={ref5} onKeyUp={(e)=>handleChange(ref6,e.target.value)}/>
                            <input type="number" className='single'  ref={ref6} onKeyUp={(e)=>{
                                ref6.current.blur()
                                // setOtp(`${otp}${e.target.value}`)
                                handleSubmit(e.target.value)
                            
                            }}/>
                        </div>
                    </div>

                    <button className="mt-40 orange-button full-width" disabled={!verified} onClick={()=>navigate('/login')}>
                        {   submit ?
                            <SubmitLoader className="left-43" />
                            :
                            'Log in'
                        }
                    </button>

                    <div className="text-center mt-20">
                        <h4 className="mt-20 fs-16 text-orange fw-400">Did not get OTP? <span className="fw-700 cursor-pointer" onClick={onResend} >Resend</span></h4>
                    </div>
                </form>
            </div>
        </AuthContainer>
    </AuthComponent>
  )
}

export default VerifyOtp