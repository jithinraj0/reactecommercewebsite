
import './App.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Productdetails from './pages/Productdetails';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/order' exact element={<Order />} />
          <Route path='/products/:id' exact element={<Productdetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;