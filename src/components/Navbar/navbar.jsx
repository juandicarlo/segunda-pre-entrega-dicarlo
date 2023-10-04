import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar"> {}
      <h1>Prime Store</h1>
      <div className="navbar-links"> {}
        <Link to="/">Home</Link>
        <Link to="/catalogo">Nosotros</Link>
        <Link to="/products">Productos</Link>
      </div>
    </div>
  );
}

export default Navbar;