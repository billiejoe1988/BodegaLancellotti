import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import Home from '../pages/Home';
import Bodega from '../pages/Bodega';

const RouterMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bodega' element={<Bodega />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterMain;
