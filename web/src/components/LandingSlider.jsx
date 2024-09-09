import React, { useEffect, useState } from 'react'


import ProductCard from './ProductCard'
import products from '../DummyData/products'
import ProductImage from '../assets/dogFood.png'

import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'






const LandingSlider = () => {

  const [box,setBox]=useState(null)
  const [productCard,setProductCard]=useState(null)
  useEffect(()=>{
    const box=document.querySelector('.carousel-container')
    const card=document.querySelector('.product-card')
    setProductCard(card)
    setBox(box)
  })

  const carouselPrev=()=>{
    let width=box.offsetWidth
    box.scrollLeft=box.scrollLeft-width;
    console.log(`Width:${width}`);
    console.log(`Scroll Left:${box.scrollLeft}`);
  }

  const carouselNext=()=>{
    let width=box.offsetWidth
    box.scrollLeft=box.scrollLeft+width;
    console.log(`Width:${width}`);
    console.log(`Scroll Left:${box.scrollLeft}`);
  }

  return (
    <div className="flex items-center justify-around cursor-pointer">
    <AiOutlineLeft className='left-caros text-gray-400 hover:bg-black text-2xl' onClick={carouselPrev}/>
   <Link className='w-full overflow-x-hidden' to={"/shop"}>
   <div id='carousel-container' className='flex carousel-container scroll-smooth w-full overflow-x-hidden'>
    {products.map(({name,price,weight,imageLink})=>(<ProductCard name={name} price={price} weight={weight} image={imageLink}/>))}
   </div>
   </Link>
<AiOutlineRight className='text-gray-400 cursor-pointer hover:bg-black right-caros text-5xl' onClick={carouselNext}/>
    </div>
    
   
  )
}

export default LandingSlider
