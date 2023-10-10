import React, { useState } from 'react'
import AddProducts from './AddProducts';

function ProductReviewCard({product,onAddProduct}) {
  const addProduct = () =>{
    onAddProduct(product)
  }
  return (
    <div className='w-full p-4 m-2 rounded bg-gradient-to-b from-gray-600 to-transparent text-center'>
        <img src='' alt='image' className='w-[200px] h-[200px] object-cover'/>
        <h2 className='pb-2 text-lg'>{product.name}</h2>
        <p className='mb-2 h-20 line-clamp-4'>{product.desciption}</p>
        <AddProducts onAddProduct={addProduct}/>
    </div>
  )
}

export default ProductReviewCard