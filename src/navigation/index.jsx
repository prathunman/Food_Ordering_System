import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';


function index() {
  return (
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
  )
}

export default index