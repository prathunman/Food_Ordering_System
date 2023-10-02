import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import {Home, Login, Register, Cart, Menu, PaymentSuccess} from '../pages'

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

export default Navi