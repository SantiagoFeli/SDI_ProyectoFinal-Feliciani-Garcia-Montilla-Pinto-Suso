import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Oferta from './components/Oferta';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import './index.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openModal = (modal) => {
    if (modal === 'login') {
      setShowLoginModal(true);
    } else if (modal === 'register') {
      setShowRegisterModal(true);
    }
  };

  const closeModal = (modal) => {
    if (modal === 'login') {
      setShowLoginModal(false);
    } else if (modal === 'register') {
      setShowRegisterModal(false);
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === 'modal') {
      setShowLoginModal(false);
      setShowRegisterModal(false);
    }
  };

  return (
    <div className="App" onClick={handleOutsideClick}>
      <Header openModal={openModal} />
      <hr className="linea1" />
      <Menu />
      <hr className="linea2" />
      <Oferta />
      {showLoginModal && <LoginModal closeModal={() => closeModal('login')} />}
      {showRegisterModal && <RegisterModal closeModal={() => closeModal('register')} />}
    </div>
  );
}

export default App;
