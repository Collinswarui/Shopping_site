import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import {Navbar} from './components/navbar.jsx';
import { Shop } from './pages/Shop/shop';
import { Cart } from './pages/Cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect } from 'react';


 
function App() {
  const showFooter = true;

  return (
    <div className={`App ${showFooter ? 'show-footer' : ''}`}>
      <div className='App'>
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart"  element={<Cart />}/>
        </Routes>
        <Footer />

      </Router>
      </ShopContextProvider>
      

      </div>
    </div>
    
  );
  
}

export default App;