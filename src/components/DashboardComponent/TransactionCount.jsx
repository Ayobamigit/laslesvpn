import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CountCards from './CountCards'
import './dashboard.scss'

const TransactionCount = () => {
  return (
    <div className="transaction-count">
        <Row>
            <Col>
                <CountCards countTitle = "Successful Transaction’s count" countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Pending Trasaction’s Count: " countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Abandoned Transactions count" countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Failed Transactions Count" countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Refunded Transaction’s Count" countValue="0" />
            </Col>
        </Row>
    </div>
  )
}

export default TransactionCount