import React, { useEffect, useState, useCallback } from "react";
import request from "../services/axios.service";
import useUserStore from "../Store/userStore";
import SecondryPetSitterCard from "./SecondryPetSitterCard";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

const BookServiceModal = ({ isModalOpen, setIsModalOpen }) => {
  const [myPets, setMyPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [petSitter, setPetSitter] = useState([]);
  const token = useUserStore((state) => state.jwtToken);
  const [selected, setSelected] = useState(0);
  const [formState, setFormState] = useState({});

  const getMyPets = useCallback(async () => {
    try {
      const response = await request({
        method: "GET",
        url: "/pet",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.status) throw new Error(response.message);
      setMyPets(response.data.pets || []);
    } catch (error) {
      toast.error(error.message || "Failed to fetch pets");
      setMyPets([]);
    }
  }, [token]);

  const getLocals = useCallback(async () => {
    try {
      const response = await request({
        url: "/auth/same-city",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.status) throw new Error(response.message);
      setPetSitter(response.data.locals || []);
    } catch (error) {
      toast.error(error.message || "Failed to fetch pet sitters");
      setPetSitter([]);
    }
  }, [token]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isModalOpen) {
        setLoading(false);
        return;
      }
      
      setLoading(true);
      try {
        await Promise.all([getMyPets(), getLocals()]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      setLoading(false);
    };
  }, [isModalOpen, getMyPets, getLocals]);

  const collectFormData = (e) => {
    const key = e.target.getAttribute("name");
    setFormState(prev => ({
      ...prev,
      [key]: e.target.value
    }));
  };

  const sendRequest = async () => {
    try {
      const newObj = { 
        ...formState,
        petSitter: petSitter[selected]?.sameCity?._id 
      };
      
      const response = await request({
        url: "/service",
        method: "POST",
        data: newObj,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.status) throw new Error(response.message);
      
      toast.success("Request Sent Successfully!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message || "Failed to send request");
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
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header - Fixed */}
            <div className="bg-[#FF9F1C] p-6 flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-bold text-white">Book A Service</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <IoMdClose size={28} />
              </button>
            </div>

            {/* Content - Scrollable */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Pet Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Your Pet
                </label>
                <select
                  onChange={collectFormData}
                  name="petDetails"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                >
                  <option value="none">Select a pet</option>
                  {myPets.map(({ _id, name }, index) => (
                    <option value={_id} key={`pet-${index}`}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Service Type
                </label>
                <select
                  onChange={collectFormData}
                  name="serviceType"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                >
                  <option value="daycare">Pet Day Care</option>
                  <option value="dogwalking">Dog Walking</option>
                  <option value="overnight">Overnight Stay</option>
                  <option value="socialisation">Pet Socialisation</option>
                </select>
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Pickup Time
                  </label>
                  <input
                    type="datetime-local"
                    name="pickUpTime"
                    onChange={collectFormData}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Drop Time
                  </label>
                  <input
                    type="datetime-local"
                    name="dropTime"
                    onChange={collectFormData}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Pet Sitter Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Select Pet Sitter
                </h3>
                {petSitter.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {petSitter.map(({ sameCity }, index) => (
                      <SecondryPetSitterCard
                        keyProp={index}
                        selected={selected}
                        setSelected={setSelected}
                        key={index}
                        image={sameCity.profileUrl}
                        name={sameCity.name}
                        location={sameCity.city}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 bg-gray-50 rounded-lg">
                    <FaUserFriends className="text-gray-400 mb-4" size={48} />
                    <p className="text-gray-600 text-center">
                      No pet sitters are currently available in your area.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Please try again later or contact support for assistance.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Fixed */}
            <div className="p-6 border-t border-gray-200 flex justify-end flex-shrink-0">
              <button
                onClick={sendRequest}
                disabled={petSitter.length === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  petSitter.length === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#FF9F1C] hover:bg-[#e68f1a] text-white"
                }`}
              >
                Book Service
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookServiceModal;
