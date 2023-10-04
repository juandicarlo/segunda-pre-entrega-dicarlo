import './App.css';
import Home from './pages/Home/home';
import Products from './pages/Products/products';
import Cart from './pages/Catalogo/catalogo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Item from './components/Item/item';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:itemId' element={<Item />} /> {}
      </Routes>
    </BrowserRouter>
  );
}

export default App;