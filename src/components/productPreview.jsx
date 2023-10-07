import React, { useEffect, useState } from 'react';
import productPreviewCard from './productReviewCard';


function productPreview() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/api/products').then(response=>response.json()).then(data=>setProducts(data?.data))
        .catch(e=>console.log(e))
    }
    )

  return (
    <div className='container mx-auto pb-4 w-2/3 text-white'>
        <h2>Products</h2>
        {
            products.length>0 && products.map((product,index)=>{
                return(
                    <div key={index}>
                        {product.name}
                    </div>
                )
            })
        }
    </div>
  )
}

export default productPreview