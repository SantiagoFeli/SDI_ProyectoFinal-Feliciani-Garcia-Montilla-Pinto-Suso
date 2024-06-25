import React from 'react';

function RegisterModal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Regístrate</h2>
        <form>
          <label htmlFor="registerEmail">Email:</label>
          <input type="email" id="registerEmail" name="registerEmail" required />
          <label htmlFor="registerPassword">Password:</label>
          <input type="password" id="registerPassword" name="registerPassword" required />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
          <button type="submit">Regístrate</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
