// CartWidget.js
import React from 'react';

function CartWidget() {
  const cantidadEnCarrito = 5;

  return (
    <div className="ml-auto">
      <span className="mr-2">Carrito: {cantidadEnCarrito} elementos</span>
      {/* Otros detalles del carrito según sea necesario */}
    </div>
  );
}

export default CartWidget;