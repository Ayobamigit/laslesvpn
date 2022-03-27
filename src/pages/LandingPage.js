import React, { createContext, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Modal from '../components/Modal/Modal'
import BannerCard from '../components/BannerCard'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Plan from '../components/Plan'
import Testimonials from '../components/Testimonials'
import SignUp from '../components/Auth/SignUp'
import axios from 'axios'
import Swal from '../components/Swal/swal'

export const LandingPageContext = createContext();

const LandingPage = () => {
  const [state, setState] = useState({
    email:'',
    password:'',
    signup: true,
    login: false,
    add: false, 
    modalValue: '',
    submit: false,
    disabled: true,
    displayError: false
  })

  const {email, password, add, modalValue, submit, displayError, disabled} = state
  const onChange =(e)=>{

    setState(state=>({
        ...state,
       [ e.target.name]: e.target.value
    }))
  }

  //Checking to handle form errors
  useEffect(()=>{
    let error = false; //To display the email error message
    let emailValidate= true; //To control the form validation for the disabled button
    let btndisabled = true;
    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if(email === ""){
        error = null
    }else{
        if (!pattern.test(email)) {

            error = true
        }else{
            emailValidate = false

        }
    }


    if(emailValidate || password.trim() === ""){
      btndisabled = true
    }else{
      btndisabled = false
    }

    setState(state=>({
      ...state,
      displayError: error,
      disabled: btndisabled
    }))


  }, [email, password])

  const showModal = (value, data) =>{
    if(!add){
        setState(state=>({
            ...state,
            add: true,
            modalValue: value,
        }))
    }else{
        setState(state=>({
            ...state,
            add: false,
        }))
    } 
  }   
  

  const onSignUp = ()=>{
    setState(state=>({
      ...state,
      submit: true
    }))

    let reqBody = {
      email, 
      password
    }

    axios({
      method: 'post',
      url: "https://43e46cb2-7eb6-4396-b9ca-0af82fd1fa79.mock.pstmn.io/auth/register",
      headers:{
        'Content-Type' : 'application/json'
      },
      data: reqBody
    }).then(res=>{
      
      if(res.status === 200){
        Swal.fire({
          // type:'success',
          title: 'Successful....',
          icon: 'success',
          text: `Account created successfully`
        })
        setState(state=>({
        ...state,
        submit: false,
        email:'',
        password:'',
        add: false
      }))
      }

    }).catch(err => {
      setState(state=>({
          ...state, 
          email:'',
          password:'',
          submit: false,
          add: false
      }))
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`,
          // footer: 'Please contact support'
      })
  });
  }

  const onSignIn = ()=>{
    setState(state=>({
      ...state,
      submit: true
    }))

    let reqBody = {
      email, 
      password
    }

    axios({
      method: 'post',
      url: "https://43e46cb2-7eb6-4396-b9ca-0af82fd1fa79.mock.pstmn.io/auth/login",
      headers:{
        'Content-Type' : 'application/json'
      },
      data: reqBody
    }).then(res=>{
      
      if(res.status === 200){
        Swal.fire({
          // type:'success',
          title: 'Successful....',
          icon: 'success',
          text: `Login successful`
        })
        setState(state=>({
        ...state,
        submit: false,
        email:'',
        password:'',
        login: true,
        add: false
      }))
      }

    }).catch(err => {
      setState(state=>({
          ...state, 
          submit: false,
          email:'',
          password:'',
          add: false
      }))
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`,
          // footer: 'Please contact support'
      })
  });
  }

  const signOut = () =>{
    setState(state=>({
      ...state,
      login: false
    }))
  }
  return (
      <LandingPageContext.Provider value={{
        onChange,
        showModal,
        signOut,
        state
      }}>
      <Modal 
        show={add}
        clicked={showModal}
        title={modalValue === 'sign-up' ? 'Get Started' : 'Welcome Back'}
        action={modalValue === 'sign-up' ? 'Sign Up' : 'Sign In'} 
        submit={modalValue === 'sign-up' ? onSignUp : onSignIn}
        loading={submit} 
        disabled={disabled}
      >
        <SignUp onChange={onChange} error={displayError} email={email} password={password}/>
      </Modal>
        <Banner />
        <BannerCard />
        <Features />
        <Plan />
        <Map />
        <Testimonials />
        <Footer />
      </LandingPageContext.Provider>
  )
}

export default LandingPage