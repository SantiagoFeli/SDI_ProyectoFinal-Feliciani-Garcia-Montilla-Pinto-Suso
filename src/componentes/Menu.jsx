import React from 'react';

function Menu() {
  return (
    <header className="menu">
      <nav className="opciones1">
        <ul className="opciones">
          <li><a href="#">MENÚ</a></li>
          <li><a href="#">CONÓCENOS</a></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="./Caracas Coffee.png" alt="Logo Caracas Coffee" />
      </div>
      <nav className="opciones2">
        <ul className="opciones">
          <li><a href="#">PEDIDO</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
