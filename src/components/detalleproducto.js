import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  // Obtiene el parámetro de ID de la URL
  let { id } = useParams();

  // Lógica para obtener los detalles del producto según el ID
  // Puedes hacer una solicitud a una API o usar datos almacenados localmente

  // Ejemplo de datos de productos
  const productos = [
    { id: 1, nombre: 'Zapatilla nike blanca', descripcion: 'Zapatilla Nike de color blanco.' },
    { id: 2, nombre: 'Zapatilla adidas negra', descripcion: 'Zapatilla Adidas de color negra.' },
    // Agrega más productos aquí
  ];

  // Encuentra el producto correspondiente según el ID
  const producto = productos.find((item) => item.id === parseInt(id));

  // Verifica si se encontró un producto
  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  // Renderiza los detalles del producto
  return (
    <div>
      <h1>Detalles del Producto</h1>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      {/* Agrega más detalles aquí */}
    </div>
  );
}

export default DetalleProducto;


