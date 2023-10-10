import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            return { products:[...state.products,{...action.payload,amount:1}]}
        },
        clearCart:(state)=>{
            return {products:[]}
        },
        incrementProductAmount:(state,action)=>{
            return {products: state.products.map(product=>product.id===action.payload.id ? {...product, amonut:product.amount+1} : product )}
        },
        decrementProductAmount:(state,action)=>{
            return {products: state.products.map(product=>product.id ? {...product,amount:product.amount-1}:product)}
        }

    }
})

export const cartProducts = state => state.cart.products

export const {addTocart,clearCart,incrementProductAmount,decrementProductAmount}= cartSlice.actions
export default cartSlice.reducer