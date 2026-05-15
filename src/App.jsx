import React, { useState } from 'react'
import axios from 'axios'

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Login from './pages/Login';

const App = () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    
    </div>
  )
}

export default App