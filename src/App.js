import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navbar} from './components/navbar.jsx';
import { Shop } from './pages/Shop/shop';
import { Cart } from './pages/Cart/cart';

 
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart"  element={<Cart />}/>
        </Routes>
      </Router>
  </div>
  );
  
}

export default App;