import React from 'react'
import './cards.scss'

const TransactionCard = () => {
  return (
    <div className="cards text-center">
        <h4 className=" fs-13 fw-700 text-darker">TRANSACTION’S COUNT</h4>
        <div className="full-width d-flex justify-content-between align-items-center mt-20">
            <div>
                <h4 className="fs-13 fw-700 text-sharp-green">200</h4>
                <h4 className="fs-13 fw-400 text-semi-dark">Successful</h4>
            </div>
            <div>
                <h4 className="fs-13 fw-700 text-orange">200</h4>
                <h4 className="fs-13 fw-400 text-semi-dark">Failed</h4>
            </div>
            <div>
                <h4 className="fs-13 fw-700 text-semi-dark">200</h4>
                <h4 className="fs-13 fw-400 text-semi-dark">Abandoned</h4>
            </div>
            <div>
                <h4 className="fs-13 fw-700 text-orange">200</h4>
                <h4 className="fs-13 fw-400 text-semi-dark">Refunded</h4>
            </div>
        </div>
    </div>
  )
}

export default TransactionCard