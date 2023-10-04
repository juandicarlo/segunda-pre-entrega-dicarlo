import React from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer'; // Importa ItemListContainer

function Catalogo() {
  return (
    <div>
      <h1>Catálogo</h1>
      <ul>
        <li>
          <Link to="/producto/1">Zapatilla nike blanca</Link>
        </li>
        <li>
          <Link to="/producto/2">Zapatilla adidas negra</Link>
        </li>
        {/* Agrega más productos aquí */}
      </ul>
      {/* Incluye el componente ItemListContainer aquí */}
      <ItemListContainer />
    </div>
  );
}

export default Catalogo;