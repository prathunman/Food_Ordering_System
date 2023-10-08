import React from 'react'
import Banner from '../components/Banner';
import About from '../components/About';
import ProductPreview from '../components/ProductPreview';

function Home() {
  return (
    <div>
      <Banner/>
      <ProductPreview/>
      <About/>
    </div>
  )
}

export default Home