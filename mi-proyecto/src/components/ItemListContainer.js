import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa los archivos JavaScript de Bootstrap
import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <p>{greeting}</p>
    </div>
  );
}

