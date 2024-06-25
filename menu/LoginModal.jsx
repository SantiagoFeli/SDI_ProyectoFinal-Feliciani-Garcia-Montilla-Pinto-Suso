import React from 'react';
import { auth, googleProvider, facebookProvider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './LoginModal.css';

function LoginModal({closeModal}) {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Ha iniciado sesión con Google correctamente");
    } catch (error) {
      console.error("Error en inicio de sesión con Google: ", error);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert("Ha iniciado sesión con Facebook correctamente");
    } catch (error) {
      console.error("Error en el inicio de sesión con Facebook: ", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Iniciar Sesión</h2>
        <form>
          <label htmlFor="loginEmail">Email:</label>
          <input type="email" id="loginEmail" name="loginEmail" required />
          <label htmlFor="loginPassword">Password:</label>
          <input type="password" id="loginPassword" name="loginPassword" required />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <hr />
        <button className="social-button facebook-button" onClick={signInWithFacebook}>
          <FaFacebook /> INICIAR CON FACEBOOK
        </button>
        <button className="social-button google-button" onClick={signInWithGoogle}>
          <FaGoogle /> INICIAR CON GOOGLE
        </button>
      </div>
    </div>
  );
}

export default LoginModal;