import React, { useState } from 'react';
import { Modal } from '../../../../../mainComponents/Modal/Modal';
import { UserForm } from '../../../UserForm';

const styles = {
    icon: {
        marginRight: '10px',
        width: '20px'
    }
}

const EmailBtn = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Modal 
                open={showModal} 
                onClose={() => setShowModal(!showModal)} 
                title="Contact information"
            >
                <UserForm />
            </Modal>
            <button 
                type="button" 
                className="btn btn-success d-flex align-items-center"
                onClick={() => setShowModal(true)}
            >
                <img style={styles.icon} src="./assets/emailIcon.png" alt="email"/>
                Email 0
            </button>
        </div>
    )
}

export { EmailBtn };