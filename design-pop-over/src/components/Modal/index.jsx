import React from 'react'

import './style.css';
import { useEffect } from 'react';

const Modal = ({ open, children, onClose }) => {

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                onClose();
            }
        }
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close)
    }, [onClose]);

    return (
        <div>
            {open && (
                <div className='modal-container'>
                    {children}    
                </div>
            )}
        </div>
    )
}

export default Modal