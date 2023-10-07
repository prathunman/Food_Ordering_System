import React, { useState } from 'react'

function productReviewCard({product}) {
  return (
    <div>
        <img src='/' alt='image'/>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
    </div>
  )
}

export default productReviewCard