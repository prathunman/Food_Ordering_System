import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchProducts, selectAllProducts} from '../stores/menu/productSlice';
import ProductDetailsCard from '../components/ProductDetailsCard'
import Tabs from '../components/Tabs';
function Menu() {
  const dispatch = useDispatch();
  const products=useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState('');

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <div>
      {
        products.status !== 'fulfilled' ?
        <div>loading...</div>:
        <div className='menu-wrpper'>
          {
            products.products && <Tabs list={products.products.map((product)=>product.name.name)}
            activeTab={activeTab}
            onTabSwitch={setActiveTab}
            />
          }
          {
          
            products.products && products.products[0].products.map((product,index)=>{
              return(
                <div>
                  <ProductDetailsCard key={index} product={product}/>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Menu