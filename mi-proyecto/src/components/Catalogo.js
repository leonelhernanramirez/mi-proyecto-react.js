// Catalogo.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Catalogo() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Aquí podes hacer una llamada a tu async mock para obtener datos del catálogo
    const fetchData = async () => {
      // Supongamos que fetchCatalogo es una función que devuelve los datos del catálogo
      const data = await fetchCatalogo();
      setItems(data);
    };

    fetchData();
  }, []); // El array vacío como segundo argumento significa que se ejecutará solo una vez al montarse el componente

  return (
    <div>
      <h2>Catálogo de Neumáticos</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/producto/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogo;
