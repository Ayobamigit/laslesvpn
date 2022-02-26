import React, { createContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import Divider from '../../components/Divider/Divider'
import Layout from '../../components/Layout/Layout'
import Payment from '../../components/TerminalComponents/Payment'
import SubTotal from '../../components/TerminalComponents/SubTotal'
import TerminalAddress from '../../components/TerminalComponents/TerminalAddress'

export const AddTerminalContext = createContext();

const AddTerminal = () => {
    const [state, setState] = useState({
        step: 'select',
        buttonValue:'Continue'
    })

    const {step} = state;

    const onChangeStep = (page, value)=>{
        setState(state=>({
            ...state,
            step: page,
            buttonValue: value
        }))
    }

    const makePayment = () =>{
        console.log('clicked')
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