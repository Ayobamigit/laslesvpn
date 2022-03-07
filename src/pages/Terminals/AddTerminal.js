import axios from '../../plugins/axios'
import React, { createContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import Divider from '../../components/Divider/Divider'
import Layout from '../../components/Layout/Layout'
import Payment from '../../components/TerminalComponents/Payment'
import SubTotal from '../../components/TerminalComponents/SubTotal'
import TerminalAddress from '../../components/TerminalComponents/TerminalAddress'
import { requestTerminal } from '../../plugins/urls'

export const AddTerminalContext = createContext();

const AddTerminal = () => {
    const [state, setState] = useState({
        step: 'select',
        buttonValue:'Continue',
        accountToDebit: '',
        deliveryAddress: '',
        fullOrPartPayment:'Full',
        partPaymentAmount: '',
        subTotal: '0',
        terminalTypes: [],
        loading: false
    })

    const {step, accountToDebit, deliveryAddress, fullOrPartPayment, partPaymentAmount, subTotal, terminalTypes} = state;

    const onChangeStep = (page, value)=>{
        setState(state=>({
            ...state,
            step: page,
            buttonValue: value
        }))
    }

    const onAddItem = (data, action) => {
        const value = data ? data.name : ''

        //Check if the terminal type already exists
        const check = terminalTypes.find((terminal) => {
            return terminal.name === value
        })
        // debugger;
        if(check){
            if(terminalTypes.length){
                // const exists = rolePermissions.find((permission, i) => {
                //     if(permission.name === value){
                //         itemToBeDeleted = i;
                //         return permission;
                //     }
                // })
                // if(exists){
                //     rolePermissions.splice(itemToBeDeleted, 1)
                // } else {
                //     rolePermissions.push(check)
                // }
            } 
            else {
                terminalTypes.push(check)
            }
        }
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
            console.log(res)
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
        makePayment
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