//import { useState } from 'react'
import './App.scss'
import Home from './views/home'
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './views/productDetails';

function App() {

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/details" Component={ProductDetails} />
    </Routes>
  )
}

export default App
