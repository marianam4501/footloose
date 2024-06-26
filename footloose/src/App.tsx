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
import RegisterView from './views/signup';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRecoilState } from 'recoil';
// import { productState } from './atoms/productState';
// import { ProductObject } from './utils/productObject';
import OrderHistoryView from './views/orderHistory';
import OrderDetailsView from './views/orderDetails';
import ProductManagementView from './views/productManagement';
import { roles } from './utils/roles';

function App() {
  // const [, setProductList] = useRecoilState(productState);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   if(loading){
  //     const fetchProducts = async () => {
  //       try {
  //         const response = await axios.get<ProductObject[]>('http://localhost:8080/product');
  //         setProductList(response.data);
  //       } catch (error) {
  //         console.error("Error fetching products:", error);
  //       }
  //       setLoading(false);
  //     };
  
  //     fetchProducts();
  //   }
  // }, [loading]);

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/products" Component={ProductListView} />
      <Route path="/login" Component={LoginView} />
      <Route path="/register" Component={RegisterView} />
      <Route path="/details/:id" Component={ProductDetailsView} />
      <Route path="/products/details/:id" Component={ProductDetailsView} />
      <Route path="/notFound" Component={NotFoundView} />
      <Route path="/*" Component={NotFoundView} />
      {/* <Route path="/cart" Component={CartView} />
      <Route path="/checkout" Component={CheckoutView} /> */}
      <Route element={<PrivateRoutes allowedRoles={[roles.USER]}/>}>
        <Route path="/cart" Component={CartView} />
        <Route path="/checkout" Component={CheckoutView} />
      </Route>
      <Route element={<PrivateRoutes allowedRoles={[roles.ADMIN]}/>}>
        <Route path="/productManagement" Component={ProductManagementView} />
      </Route>
      <Route element={<PrivateRoutes allowedRoles={[roles.USER, roles.ADMIN]}/>}>
        <Route path="/history" Component={OrderHistoryView} />
        <Route path="/orderDetails/:id" Component={OrderDetailsView} />
      </Route>
    </Routes>
  )
}

export default App
