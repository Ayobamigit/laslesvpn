import React from 'react'
import Divider from '../Divider/Divider'
import Address from './Address'
import SelectTerminal from './SelectTerminal'

const TerminalAddress = () => {
  return (
    <>
    <div className="text-center">
        <h4 className="fs-20 text-grey fw-700 font-default">Select your preffered POS Terminal Device</h4>
    </div>
    <SelectTerminal />
    <Address />
    <Divider />
    </>
  )
}

export default TerminalAddress