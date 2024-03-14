// LogoutConfirmationModal.js
import React from 'react';
import Modal from 'react-modal';
import './pages/Login.css'

Modal.setAppElement('#root'); // Set the root element as the app element for accessibility

function LogoutConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal className="Lgout"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Logout Confirmation"
    >
      <h2>Confirm Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={onConfirm} className="btnsp">Confirm</button>
      <button onClick={onClose}className="btnsp">Cancel</button>
    </Modal>
  );
}

export default LogoutConfirmationModal;
