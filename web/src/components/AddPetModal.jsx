import React, { useState } from "react";
import request from "../services/axios.service";
import useUserStore from "../Store/userStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const AddPetModal = ({ isModalOpen, setIsModalOpen }) => {
  const [formState, setFormState] = useState({
    name: "",
    petType: "",
    breed: "",
    gender: "",
    description: "",
  });
  const token = useUserStore((state) => state.jwtToken);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const collectFormData = (e) => {
    const key = e.target.getAttribute("name");
    const newObj = { ...formState };
    newObj[key] = e.target.value;
    setFormState(newObj);
  };

  const registerPet = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("breed", formState.breed);
      formData.append("gender", formState.gender);
      formData.append("petType", formState.petType);
      formData.append("description", formState.description);
      formData.append("image", file);

      const response = await request({
        method: "POST",
        url: "/pet",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data.status) throw new Error(response.data.message);
      
      toast.success("Pet Registered Successfully!");
      setIsModalOpen(false);
      navigate("/userprofile");
    } catch (error) {
      toast.error(error.message || "Failed to register pet");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF9F1C] mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 relative overflow-hidden">
            {/* Header */}
            <div className="bg-[#FF9F1C] p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Add Your Pet</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <IoMdClose size={28} />
              </button>
            </div>

            {/* Content */}
            <form onSubmit={registerPet} className="p-6 space-y-6">
              {/* Pet Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Pet Name
                </label>
                <input
                  onChange={collectFormData}
                  name="name"
                  type="text"
                  placeholder="Enter your pet's name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Pet Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Pet Type
                </label>
                <select
                  onChange={collectFormData}
                  name="petType"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select pet type</option>
                  <option value="bird">Bird</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="reptile">Reptile</option>
                </select>
              </div>

              {/* Breed */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Breed
                </label>
                <input
                  onChange={collectFormData}
                  type="text"
                  name="breed"
                  placeholder="Enter your pet's breed"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  onChange={collectFormData}
                  name="gender"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  onChange={collectFormData}
                  name="description"
                  placeholder="Tell us about your pet"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Pet Photo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-[#FF9F1C] cursor-pointer hover:bg-gray-50">
                    <svg className="w-8 h-8 text-[#FF9F1C]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z" />
                    </svg>
                    <span className="mt-2 text-base text-gray-600">Select a photo</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setFile(e.target.files[0])}
                      accept="image/*"
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-[#FF9F1C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e68f1a] transition-colors"
                >
                  Add Pet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPetModal;
