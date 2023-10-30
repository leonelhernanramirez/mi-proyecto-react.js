import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa los archivos JavaScript de Bootstrap
import CartWidget from './CartWidget';
import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Inicio</a>
      <a className="nav-link" href="/productos">Productos</a>
      <a className="nav-link" href="/acerca-de">Acerca de</a>
      <a className="nav-link" href="/contacto">Contacto</a>
      <CartWidget />
    </nav>
  );
}

