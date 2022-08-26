import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useData } from './context/DataContext';
import React, { useEffect } from 'react';
import {
   handleFetchCart,
   handleFetchProducts,
   handleFetchUserDetails,
   handleFetchWishlist,
} from './utils/serverRequest';

import Home from './pages/Home';
import { Toast } from './components/Toast/Toast';
import ProductsList from './pages/ProductListing/ProductsList';
import Login from '../src/components/Authentication/Login/Login';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Signin from '../src/components/Authentication/SignUp/Signin';
import Cart from './pages/Cart/Cart';
import { PrivateRoute } from './components/Authentication/PrivateRoute';

import { useAuth } from './context/AuthContext';
import { Product } from './pages/Product/Product';
import { WishList } from './pages/WishList/WishList';
import { Account } from './pages/Account/Account'

function App() {
  const { dispatch } = useData();
   const {
      authState: { token },
      authDispatch
   } = useAuth();

   useEffect(() => {
      handleFetchProducts(dispatch);
   }, [dispatch, token]);

   useEffect(() => {
      if (token) {
         handleFetchCart(dispatch, token);
         handleFetchWishlist(dispatch, token);
         handleFetchUserDetails(authDispatch,token)
      }
   }, [dispatch, token, authDispatch]);
   
  return (
    <div className='App'>
      <Navbar />
      <Toast />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/product/:id' element={<Product />} />

         <Route element={<PrivateRoute />} >
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<WishList/>} />
            <Route path='/account' element={<Account/>} />
         </Route>
         
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
