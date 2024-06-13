import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';  
import Details from './Details';
import Cart from './Cart';
function App() {
  return (
    <div>
<ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<Home />} />
        <Route path="/detail/:id" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>  
  );
}

export default App;
