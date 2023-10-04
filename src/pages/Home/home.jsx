import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div
        style={{
          backgroundImage: 'url("/img/banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px', 
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            paddingTop: '100px',
            color: 'white', 
          }}
        >
          Bienvenido a nuestra tienda de ropa
        </h1>
      </div>

      {/* Descripción */}
      <div style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Descubre la coleccion de Prime Store</h2>
        <p>
  Nuestra tienda te ofrece una amplia selección de prendas de vestir para todas las estaciones y estilos.
  Desde elegantes trajes hasta ropa relajada y deportiva, contamos con todo lo que requieres para destacar con estilo.
  Descubre nuestra colección y mantente al día con las tendencias más recientes en moda.
</p>

      </div>
    </div>
  );
};

export default Home;