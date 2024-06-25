import React from 'react';

function Header({ openModal }) {
  return (
    <header className="sesion">
      <button onClick={() => openModal('login')}>Iniciar sesión</button>
      <button onClick={() => openModal('register')}>Regístrate</button>
    </header>
  );
}

export default Header;
