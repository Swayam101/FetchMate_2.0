import { FaEdit, FaUser } from "react-icons/fa";
import useUserStore from "../Store/userStore";
import request from "../services/axios.service";
import { CiMedicalCross } from "react-icons/ci";
import { useEffect, useState } from "react";
import PetProfileCard from "./PetProfileCard";
import AddPetModal from "./AddPetModal";

const Profile = () => {
  const userData = useUserStore((state) => state.userData);
  const dob = new Date(userData.DOB);
  const [pets, setPets] = useState([]);
  const [changeProfile, setChangeProfile] = useState();
  const token = useUserStore((state) => state.jwtToken);
  const setUserData = useUserStore((state) => state.setUserData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    request({
      url: "/pet",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setPets(res.data.pets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitProfile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profile", file);
    request({
      url: "/auth/add-profile",
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-100 rounded-full blur-md opacity-50" />
              {userData.profileUrl ? (
                <img
                  src={userData.profileUrl}
                  alt="Profile"
                  className="w-40 h-40 rounded-full border-4 border-white shadow-lg relative z-10"
                />
              ) : (
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg relative z-10 bg-gray-100 flex items-center justify-center">
                  <FaUser className="w-20 h-20 text-gray-400" />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{userData.name}</h1>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {userData.roles.length > 2 ? "Pet Sitter" : "Pet Parent"}
                </span>
                <button
                  onClick={() => setChangeProfile(!changeProfile)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#FF9F1C] text-white rounded-lg hover:bg-[#e68f1a] transition-colors"
                >
                  <FaEdit size={16} />
                  <span>Change Photo</span>
                </button>
              </div>
              {changeProfile && (
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm mb-2">Upload New Photo</label>
                  <input
                    onChange={submitProfile}
                    type="file"
                    accept="image/*"
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FF9F1C] file:text-white hover:file:bg-[#e68f1a]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                disabled
                type="text"
                value={userData.name.split(" ")[0]}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                disabled
                type="text"
                value={userData.name.split(" ")[1]}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                disabled
                type="email"
                value={userData.email}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                disabled
                type="text"
                value={dob.toDateString()}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                disabled
                type="tel"
                value={userData.mobile}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Alternate Number</label>
              <input
                disabled
                type="tel"
                value={userData.altMobile || "N/A"}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                disabled
                type="text"
                value={userData.address}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                disabled
                type="text"
                value={userData.city}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                disabled
                type="text"
                value={userData.state}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                disabled
                type="text"
                value={userData.country}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Pets Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Pets</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#FF9F1C] text-white rounded-lg hover:bg-[#e68f1a] transition-colors"
            >
              <CiMedicalCross size={20} />
              <span>Add Pet</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet, index) => (
              <PetProfileCard
                key={index}
                name={pet.name}
                image={pet.imageUrl}
                breed={pet.breed}
                gender={pet.gender}
                description={pet.description}
              />
            ))}
          </div>
        </div>
      </div>

      <AddPetModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Profile;
