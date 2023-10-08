import React, { useState } from 'react'

function ProductReviewCard({product}) {
  return (
    <div className='w-full p-4 m-2 rounded bg-gradient-to-b from-gray-600 to-transparent text-center'>
        <img src='/' alt='image'/>
        <h2 className='pb-2 text-lg'>{product.name}</h2>
        <p className='mb-2 h-20 line-clamp-4'>{product.description}</p>
    </div>
  )
}

export default ProductReviewCard