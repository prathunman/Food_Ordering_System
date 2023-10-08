import React, { useState, useEffect } from 'react';
import ProductReviewCard from './ProductReviewCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function ProductPreview() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/api/products')
        .then(response=>response.json())
        .then(data=>setProducts(data?.data))
        .catch(e=>console.log(e))
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='container mx-auto pb-4 w-2/3'>
        <h2>Products</h2>
        <Carousel responsive={responsive}>
        {
            products.length>0 && products.map((product,index)=>{
                return(
                    <div className='w-full p-3'>
                        <ProductReviewCard key={index} product={product} />
                    </div>
                )
            })
        }
        </Carousel>
    </div>
  )
}

export default ProductPreview