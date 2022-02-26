import React from 'react'
import Layout from '../../components/Layout/Layout'
import {ReactComponent as Back} from '../../assets/icons/back.svg'
import { Row, Col } from 'react-bootstrap'
import TransactionDetails from '../../components/TransactionComponents/TransactionDetails'
import CardDetails from '../../components/TransactionComponents/CardDetails'

const Transaction = () => {
  return (
    <Layout title="Transactions">
        <div className="font-default address">
            <h4 className="text-darker fs-14 fw-700 cursor-pointer">
                <span className="mr-15"><Back /></span>
                Back 
            </h4>

            <Row className="mt-20">
                <TransactionDetails />
                <CardDetails />
            </Row>
        </div>

    </Layout>
  )
}

export default Transaction