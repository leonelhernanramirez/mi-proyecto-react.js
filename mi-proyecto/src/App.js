import React from 'react';
import NavBar from './components/NavBar.';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      {/* Otro contenido de la aplicación */}
    </div>
  );
}

export default App;

