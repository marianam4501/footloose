//import { useState } from 'react'
import './App.scss'
import Home from './views/home'
import { Routes, Route } from 'react-router-dom';
import ProductDetailsView from './views/productDetails';
import LoginView from './views/login/login';
import ProductListView from './views/productList';
import CartView from './views/cart';
import CheckoutView from './views/checkout';
import NotFoundView from './views/notFound';
import PrivateRoutes from './components/privateRoute/privateRoute';

function App() {

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/products" Component={ProductListView} />
      <Route path="/login" Component={LoginView} />
      <Route path="/details/:id" Component={ProductDetailsView} />
      <Route path="/products/details/:id" Component={ProductDetailsView} />
      <Route path="/notFound" Component={NotFoundView} />
      {/* <Route path="/cart" Component={CartView} />
      <Route path="/checkout" Component={CheckoutView} /> */}
      <Route element={<PrivateRoutes/>}>
        <Route path="/cart" Component={CartView} />
        <Route path="/checkout" Component={CheckoutView} />
      </Route>
    </Routes>
  )
}

export default App
