import axios from '../../plugins/axios'
import React, { createContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Divider from '../../components/Divider/Divider'
import Layout from '../../components/Layout/Layout'
import Payment from '../../components/TerminalComponents/Payment'
import SubTotal from '../../components/TerminalComponents/SubTotal'
import TerminalAddress from '../../components/TerminalComponents/TerminalAddress'
import { allterminalTypes, requestTerminal } from '../../plugins/urls'
import { toast, Slide } from "react-toastify"
import { Navigate, useNavigate } from 'react-router'

export const AddTerminalContext = createContext();

const AddTerminal = () => {
  const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const navigate  = useNavigate();
    const [state, setState] = useState({
        step: 'select',
        buttonValue:'Continue',
        accountToDebit: '1243353213',
        deliveryAddress: user ? user.address : '5, Ogudu Road, Ojota Lagos',
        fullOrPartPayment:'',
        partPaymentAmount: '',
        subTotal: 0,
        types: [
            // {
            //     id: 1,
            //     terminalName: "PAX",
            //     terminalCategory: "Android POS Device",
            //     quantity: 0,
            //     amount: 1000
            // },
            // {
            //     id: 2,
            //     terminalName: "NEXGO",
            //     terminalCategory: "Android POS Device",
            //     quantity: 0,
            //     amount: 12000
            // },
            // {
            //     id: 3,
            //     terminalName: "TOPWISE",
            //     terminalCategory: "Android POS Device",
            //     quantity: 0,
            //     amount: 9000
            // },
        ],
        terminalTypes: [],
        loading: false
    })

    const {step, accountToDebit, deliveryAddress, fullOrPartPayment, partPaymentAmount, subTotal, terminalTypes} = state;

    useEffect(()=>{
        axios({
            method: 'get',
            url:`${allterminalTypes}`
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    types: res.data.respBody
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
    },[])

    const onChangeStep = (page, value)=>{
        setState(state=>({
            ...state,
            step: page,
            buttonValue: value
        }))
    }

    const onAddItem = (data, action) => {
        const value = data ? data.terminalName : ''
        let itemRemove = 0
        // debugger
        //Check if the terminal type already exists
        const check = terminalTypes.find((terminal, i) => {
            itemRemove = i
            return terminal.terminalName === value
        })
        // debugger;
        if(check){
            terminalTypes.splice(itemRemove, 1)
            if(action === 'add'){
                let newQuantity = check.quantity
                let total = subTotal
                newQuantity = newQuantity + 1
                total = total + data.amount
                let {quantity, ...details} = check
                details = Object.assign({
                    quantity: newQuantity
                }, details)

                terminalTypes.push(details)
                setState(state=>({
                    ...state,
                    subTotal: total
                }))
            } 
            else if(action === 'remove') {
                if(check.quantity > 1){
                    let newQuantity = check.quantity
                    let total = subTotal
                    newQuantity = newQuantity - 1
                    total = total - data.amount
                    let {quantity, ...details} = check
                    details = Object.assign({
                        quantity: newQuantity
                    }, details)
                    terminalTypes.push(details)
                    setState(state=>({
                        ...state,
                        subTotal: total
                    }))
                }else{
                    let total = subTotal
                    total = total - data.amount
                    setState(state=>({
                        ...state,
                        subTotal: total
                    }))
                }
                

            }
        }else {
            if(action === 'add'){
                let newQuantity = data.quantity
                newQuantity = newQuantity + 1
                let {quantity, ...details} = data
                details = Object.assign({
                    quantity: newQuantity
                }, details)

                if(subTotal === 0){
                    let total = data.amount
                    setState(state=>({
                        ...state,
                        subTotal: total
                    }))
                }else{
                    let total = subTotal
                    total = total + data.amount
    
                    setState(state=>({
                        ...state,
                        subTotal: total
                    }))
                }

                terminalTypes.push(details)
            } 
            // else if(action === 'remove') {
            //     if(check.quantity > 1){
            //         let newQuantity = check.quantity
            //         let total = subTotal
            //         newQuantity = newQuantity - 1
            //         total = total - data.amount
            //         let {quantity, ...details} = check
            //         details = Object.assign({
            //             quantity: newQuantity
            //         }, details)
            //         terminalTypes.push(details)
            //         setState(state=>({
            //             ...state,
            //             subTotal: total
            //         }))
            //     }else{
            //         let total = subTotal
            //         total = total - data.amount
            //         setState(state=>({
            //             ...state,
            //             subTotal: total
            //         }))
            //     }
                

            // }



            
        }
    }

    const onSelectPayment = (value)=>{
        setState(state=>({
            ...state,
            fullOrPartPayment: value
        }))
    }

    const makePayment = () =>{
        setState(state=>({
            ...state,
            loading: true
        }))
        let reqBody = {
            accountToDebit,
            deliveryAddress, 
            fullOrPartPayment,
            partPaymentAmount,
            subTotal, 
            terminalTypes
        }

        axios({
            method: 'post',
            url: `${requestTerminal}`,
            data: reqBody
        }).then(res=>{
            setState(state=>({
                ...state,
                loading: false
            }))
            if(res.data.respCode === 0){
                toast.success("Terminal request successful", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                  });
                  navigate('/terminals') 
            }
            console.log(res)
        }).catch(err=>{
            setState(state=>({
                ...state,
                loading: false
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
            case 'select':
                return <TerminalAddress />;
            case 'pay':
                return <Payment />;
            default:
                return <TerminalAddress />
        }
    }

  return (
    <AddTerminalContext.Provider value={{
        state,
        onChangeStep,
        makePayment,
        onAddItem,
        onSelectPayment
    }}>
        <Layout title="Terminals">
            <Container fluid>
                {renderPages()}
                <Divider />
                <SubTotal />
            </Container>
        </Layout>
    </AddTerminalContext.Provider>
  )
}

export default AddTerminal