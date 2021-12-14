import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import NavComponent from './components/nav'

// Views
import ProductsView from './views/products'
import CartView from './views/cart'

function App() {
  return (
    <Router>
      <NavComponent/>

      <main className="app">
        <Routes>
          <Route exact path="/" element={<ProductsView/>}/>
          <Route exact path="/cart" element={<CartView/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
