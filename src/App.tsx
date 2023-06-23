
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Formulario from './components/Formulario';
import Login from './components/Login';
import MenuComponent from './components/MenuComponent';
function App() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/formulario">Formulario</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/menucomponent">MenuComponent</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menucomponent" element={<MenuComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;