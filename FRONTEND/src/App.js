import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/login'
import {PageVendedor} from './components/Vendedor/PageVendedor'
import {PageComprador} from './components/Comprador/PageComprador'
import {PagePublicaciones} from './components/Vendedor/PagePublicaciones'
import {PageOfertar} from './components/Comprador/PageOfertar'
import { PageRespuestas } from './components/Comprador/PageRespuestas';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path ="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Respuestas" element={<PageRespuestas/>} />
        <Route path="/Vendedor" element={<PageVendedor/>} />
        <Route path="/Ofertas" element={<PageVendedor/>} />
        <Route path="/Publicaciones" element={<PagePublicaciones/>} />
        <Route path="/Comprador" element={<PageComprador/>} />
        <Route path="/OfertarComprador" element={<PageOfertar/>} />
  

      </Routes>
    </div>
    </Router> 
  );
}

export default App;
