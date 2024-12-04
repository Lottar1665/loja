'use client'

import React from 'react'
import Link from 'next/link'
import Carousel from '../components/carrossel';


const items = [
  '/images/image1.png',
  '/images/image2.png'
]
function Home() {
  return (
    <div>
      
      <div>Menu dropdown</div>
      <div>3legant.</div>
      <div>carrinho de compras</div>
      <div className="flex items-center justify-center bg-gray-100">
      <Carousel items={items} />
    </div>
      <div>Carrosel 2</div>
      <div>Simply Unque/Simply Better</div>
    </div>
  )
}

export default Home