// DetalleProducto.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams(); // Obtén el parámetro de la URL

  useEffect(() => {
    // Aquí podrías hacer una llamada a tu async mock para obtener detalles del producto por su ID
    const fetchProducto = async () => {
      // Supongamos que fetchDetallesProducto es una función que devuelve los detalles del producto por ID
      const data = await fetchDetallesProducto(itemId);
      setProducto(data);
    };

    fetchProducto();
  }, [itemId]); // itemId como dependencia para volver a cargar los detalles cuando cambia

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Producto {itemId}</h2>
      <p>{producto.descripcion}</p>
      {/* Mostrar otros detalles según sea necesario */}
    </div>
  );
}

export default DetalleProducto;
