import React from 'react';
import { useParams } from 'react-router-dom';
import { getItemById, items } from '../../Helpers/Items';

const Item = () => {
  const { itemId } = useParams();

  // Encontrar el elemento correspondiente en base al ID
  const item = getItemById(itemId);

  if (!item) {
    // Manejar el caso en el que el elemento no se encuentre
    return <div>El producto no se encontró.</div>;
  }

  // Estilos para centrar los elementos
  const itemStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center', 
    height: '100vh', 
  };

  // Estilos para el contenedor de la imagen
  const imageContainerStyles = {
    maxWidth: '80%', 
  };

  // Estilos para las imágenes
  const imageStyles = {
    width: '30%',
    height: 'auto',
  };


  return (
    <div style={itemStyles}>
      <h2>{item.title}</h2>
      <p>Precio: {item.precio}</p>
      <div style={imageContainerStyles}>
        <img
          src={item.imagen}
          alt={item.title}
          style={imageStyles}
        />
      </div>
    </div>
  );
};

export default Item;