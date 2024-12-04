'use client'

import React from 'react'
import Link from 'next/link'
import Carousel from '../components/carrossel';
import Dropdown from '../components/menudropdownMobile';


const items = [
  '/images/image1.png',
  '/images/image2.png'
]
const menuItems = ["Perfil", "Configurações", "Sair"]
function Home() {
  return (
    <div>
      <div className="flex bg-gray-100">
        <Dropdown title='' items={menuItems}/>
      <div>3legant.</div>
      <div>carrinho de compras</div>
      </div>
      <div className="flex items-center justify-center bg-gray-100">
      <Carousel items={items} />
    </div>
      <div>Carrosel 2</div>
      <div>Simply Unque/Simply Better</div>
    </div>
  )
}

export default Home