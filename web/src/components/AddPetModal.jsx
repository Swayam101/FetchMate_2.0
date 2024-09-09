import React, { useState } from 'react'
import ReactModal from 'react-modal'

import axios from '../utils/axiosConfig'
import useUserStore from '../Store/userStore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddPetSitterModal = ({isModalOpen,setIsModalOpen}) => {

  const [formState,setFormState]=useState({
    name:"",
    petType:"",
    breed:"",
    gender:"",
    description:""
  })
  const token=useUserStore((state)=>state.jwtToken)
  const [file,setFile]=useState(null)

  const navigate=useNavigate()


  const collectFormData = (e) => {
    const key = e.target.getAttribute("name");
    const newObj = { ...formState };
    newObj[key] = e.target.value;
    setFormState(newObj);
  };
  console.log(formState);

  

  const registerPet=async (e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append("name",formState.name)
    formData.append("breed",formState.breed)
    formData.append("gender",formState.gender)
    formData.append("petType",formState.petType)
    formData.append("description",formState.description)
    formData.append("image",file)
    const response=await axios({
      method:"POST",
      url:"/pet",
      data:formData,
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    toast.success("Pet Registered Successfully!")
    setIsModalOpen(false)
    navigate("/userprofile")

  }
  return (
    <ReactModal
      style={{
        content: {
          height: "75%",
          width: "50%",
          left: "25%",
          top:"20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "2%",
          paddingRight: "3%",
          zIndex:"100",
          borderRadius:"5%",
          border:"3px solid black"
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel='Register Your Pet'
    >
      <div className="flex flex-col gap-6 h-full z-50">
       <div className='text-2xl font-bold text-center'>Add Your Pet</div>
       <input onChange={collectFormData} name='name' type="text" placeholder='Enter Pet Name' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
       <select onChange={collectFormData} name='petType' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="bird">Bird</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="reptile">Reptile</option>
       </select>
       <input onChange={collectFormData} type="text" name='breed' placeholder='Enter Pet Breed' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
       <select onChange={collectFormData} name='gender' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="male">Male</option>
        <option value="female">Female</option>
       </select>
       <textarea onChange={collectFormData} name='description'  placeholder='Enter Pet Description' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <input onChange={(e)=>setFile(e.target.files[0])} name='petImage' type="file" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      <div className='text-center '><button onClick={registerPet} className='border-2 p-2 text-cyan-300 border-yellow-40'> Submit</button></div>
      </div>
    </ReactModal>
  )
}

export default AddPetSitterModal
