import React from 'react'

const SecondryPetSitterCard = ({setSelected,image,name,location,selected,keyProp}) => {
  return (
    <div onClick={()=>setSelected(keyProp)}  className={`flex p-4 flex-col items-center w-fit h-fit ${selected==keyProp?"bg-yellow-300":""}`}>
        <div className=''><img className='w-20 h-20 rounded-full' src={image} alt="" /></div>
    <div>{name}</div>
    <div>{location}</div>
    </div>
  )
}

export default SecondryPetSitterCard
