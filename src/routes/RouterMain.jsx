import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Bodega from '../pages/Bodega';
import visitas from '../components/visitas.jsx';

const RouterMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bodega' element={<Bodega />} />
        <Route path='/visitas' element={<visitas />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterMain;
