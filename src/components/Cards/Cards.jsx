import React from 'react'
import './cards.scss'

const Cards = (props) => {
  return (
    <div className="cards">
        <h4 className={`${props.color ? props.color: ''} fs-14 fw-700`}>{props.cardTitle}</h4>
        <h4 className={`${props.textColor ? props.textColor: ''} fs-35 fw-700 mt-20`}>{props.value}</h4>
    </div>
  )
}

export default Cards