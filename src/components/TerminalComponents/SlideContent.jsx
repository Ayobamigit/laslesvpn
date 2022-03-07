import React from 'react'
import './select.scss'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import { ReactComponent as Minus } from '../../assets/icons/minus.svg'

const SlideContent = (props) => {
  return (
    <div className="slide-item">
        <div className="d-flex justify-content-between">
            <div className="product-bg">
               <img src={props.img} alt="" />
            </div>
            <div className="mt-35">
                <h4 className="text-white fs-25 m-0">Nexgo G3</h4>
                <h4 className="text-semi-white fs-14 fw-400">Android POS Device</h4>
                <div className="d-flex justify-content-around mt-20">
                    <div className="action-bg text-center cursor-pointer">
                        <Minus />
                    </div>
                    <h4 className="text-white fs-14 mt-02">1</h4>
                    <div className="action-bg text-center cursor-pointer">
                        <Plus />
                    </div>
                </div>
                <h4 className="text-white fs-20 mt-20">₦ 20,000.00</h4>
            </div>
        </div>
    </div>
  )
}

export default SlideContent