import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({open, onClose, title, children}) => {
 
    return (
        <>
            {
                open ?
                createPortal(
                <div className="custom_modal_wrapper">
                    <div className="custom_modal_container">
                        <div className="modal-header">
                            <p>{title}</p>
                            <span className="custom_close" onClick={onClose}>&times;</span>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        {/* <div className="modal-footer">
                            <button 
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button className="btn btn-success">Submit</button>
                        </div> */}
                    </div>
                   
                </div>, 
                document.body)
                :
                null
            }
        </>
    )
}

export { Modal };