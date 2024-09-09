
import React, { useState } from 'react'
import categories from './categoriesData'
import {GiSchoolBag} from 'react-icons/gi'
import {TbBottle} from 'react-icons/tb'
import useStore from '../../Store/shopStore'

const getCategoryIcon=(category)=>{
  switch (category) {
    case "bag":return <GiSchoolBag size={60}/>
      break;
    case "sipper":return <TbBottle size={60}/>
      break;
  }
}

const CategoriesSlider = () => {
  const filterProducts = useStore((state) => state.applyCategory);
  const products=useStore((state)=>state.categoryProducts)
  const [selected, setSelected] = useState("0");

  const handleClick =(category, num) => {
   filterProducts(category);
    setSelected(num)
  }

  return (
    <div style={{scrollbarWidth:"none"}} className='visible p-5 col-span-2 sm:hidden flex'>
      <h1>Select Category</h1>
      <div style={{scrollbarWidth:"none"}} className='overflow-y-scroll flex'>
      {categories.map(({category},index)=>
        (<span onClick={()=>handleClick(category,index)} key={index} className={`text-center ${
          selected == index ? "border-4 rounded" : ""
        }`}>
          {/* <GiSchoolBag size={60}/> */}
          {getCategoryIcon(category)}
          <span className='text-center uppercase'>{category}</span>
        </span>)
      )}
      </div>
    </div>
  )
}

export default CategoriesSlider;
