import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import SubmitLoader from '../SubmitLoader/SubmitLoader';
import './modal.css'


const Modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} closeModal={props.clicked} />

            <div 
                className='Modal'
                style = {{
                    transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' :'0',
                    
                }}
            >

                <div className='modaldialog modaldialogcentered'
                 
                >
                    <div className='modalcontent'>
                        <div className='modalheader'>
                            <h6 className='text-xl font-primary-font font-medium'>
                                {props.title}
                            </h6>
                        </div>

                        <div className='modalbody'>
                            {props.children}
                        </div>

                        <div className='modalfooter'>
                            <button type="button" className="px-8 py-2 bg-transparent border border-bright-red rounded-xl font-medium text-bright-red text-base mr-6"  onClick={props.clicked}>Close</button>
                            {props.submit == "false"? null:
                            <button disabled={props.disabled} type="submit" className="bg-default-red text-white text-base rounded-xl text-center py-2.5 px-8 font-regular" onClick={props.submit}>
                                {
                                    props.loading ?
                                    <SubmitLoader />
                                    :
                                    props.action

                                }
                            </button>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal
