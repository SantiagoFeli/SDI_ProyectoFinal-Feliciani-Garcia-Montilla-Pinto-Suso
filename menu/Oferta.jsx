import React from 'react';

function Oferta() {
  return (
    <section className="oferta">
      <div className="oferta-texto">
        <h2>¡DESPIERTA TUS SENTIDOS CON EL MEJOR CAFÉ!</h2>
        <p>Uniéndote a ccs coffee club obtendrás ofertas exclusivas y mucho más! Con tu primera compra obtendrás 2 bebidas gratis.</p>
        <a href="#" className="suscribete"><button>SUSCRÍBETE</button></a>
      </div>
      <div className="cafe">
        <img src="./Ccs Coffee Bar.png" alt="Ccs Coffee Bar" />
      </div>
    </section>
  );
}

export default Oferta;
