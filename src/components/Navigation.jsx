import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
// import {Home, Login, Register, Cart, Menu, PaymentSuccess} from '../pages'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Menu from '../pages/Menu';
import PaymentSuccess from '../pages/Menu';
function Navigation() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation