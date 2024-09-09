import React from 'react'


const ProductCard = ({name,price,weight,image}) => {
  return (
    <div style={{height:"25%",width:"25%"}} className="product-card pb-8 flex flex-col items-center flex-shrink-0">
      <div style={{height:"70%",width:"65%"}} className='pb-4'>
      <img className='h-full w-full' src={image} alt="" srcset="" />
      </div>
      <div className='font-bold'>{name}</div>
      <div className='text-base font-bold'>{price}</div>
      <div className='text-sm'>{weight}</div>
    </div>
  )
}

export default ProductCard
