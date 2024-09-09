'use client'
import useCartStore from '@app/Store/CartStore';
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {

    const cartQuantity = useCartStore((state) => state.cart.length);
    const [noOfItems,setNoOfItems]=useState(0)
    
    useEffect(()=>{
        setNoOfItems(cartQuantity)
    },[cartQuantity])
    
  return (
    <button
    type="button"
    className="relative inline-flex items-center p-1 text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <FaShoppingCart size={20} />

    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
      {noOfItems}
    </div>
  </button>
  )
}

export default CartIcon
