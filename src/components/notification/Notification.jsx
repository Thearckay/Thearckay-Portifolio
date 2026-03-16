import React from 'react';
import './Notification.css';

const Notification = ({ title, message, type = 'success', onClose }) => {

    if (!message) return null

    setTimeout(()=>{
        onClose()
    },3000)

    return (
        <div className={`notification-container ${type}`}>
            <div className="notification-content">
                <div className="icon-section">
                {type === 'success' ? (
                    <i className="bi bi-check2-circle"></i>
                ) : (
                    <i className="bi bi-exclamation-triangle"></i>
                )}
                </div>
                <div className="text-section">
                <strong>{title}</strong>
                <p>{message}</p>
                </div>
                <button className="close-btn" onClick={onClose}>
                <i className="bi bi-x"></i>
                </button>
            </div>
            <div className="progress-bar"></div>
        </div>
    );
};

export default Notification;