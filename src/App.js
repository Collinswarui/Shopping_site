import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navbar} from './components/navbar.jsx';
import { Shop } from './pages/Shop/shop';
import { Cart } from './pages/Cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/footer';

 
function App() {
  return (
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
  );
  
}

export default App;