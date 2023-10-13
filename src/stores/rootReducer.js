import React from 'react'

import { combineReducers } from 'redux';
import cartReducer from './cart/cartSlice'
import productSlice from './menu/productSlice';


const rootReducer = combineReducers(
    {cart:cartReducer,
    products:productSlice}
)
export default rootReducer; 