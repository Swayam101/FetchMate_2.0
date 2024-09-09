import { FaEdit } from "react-icons/fa";
import BlueLogo from "../assets/FETCHMATE LOGO/BlueLogo.svg";
import useUserStore from "../Store/userStore";
import axios from "../utils/axiosConfig";
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
    axios({
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
    axios({
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
    <>
      {/* Header */}
      <div className="topheader h-72 cover-image">
        <div className="contentcontainer flex px-10 pt-36 ">
          <div className="rightsection flex pl-10 w-11/12 gap-4 ">
            <img
              src={userData.profileUrl}
              className="w-32 h-32 rounded-full border-2 border-black"
            ></img>
            <div className="h-fit w-fit self-center">
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <h5 className="text-base">
                {userData.roles.length > 2 ? "Pet Sitter" : "Pet Parent"}
              </h5>
            </div>
          </div>
          <div className="leftsection self-end flex">
            {changeProfile ? (
              <div className="inline-flex w-fit items-center">
                <label htmlFor="profileUpload w-fit">
                  Upload Profile Image
                </label>
                <input onChange={submitProfile} type="file" />
              </div>
            ) : (
              ""
            )}
            <button
            content="Change Profile Photo"
              onClick={() => setChangeProfile(!changeProfile)}
              class="text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Change Profile
              <FaEdit size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Botton form */}
      <div className="ms-20 me-20 mt-10 gap-12">
        <div className="grid grid-cols-2 gap-4 ">
          <span className="FirstName">
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              disabled
              type="text"
              name="firstName"
              value={userData.name.split(" ")[0]}
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Jack"
              required=""
            />
          </span>
          <span className="LastName">
            <label
              htmlFor="Last Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={userData.name.split(" ")[1]}
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leo"
              required=""
            />
          </span>
          <span className="Email">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              disabled
              type="email"
              name="email"
              value={userData.email}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </span>

          <span className="DOB">
            <label
              htmlFor="DOB"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of Birth
            </label>
            <input
              disabled
              type="text"
              value={dob.toDateString()}
              name="DOB"
              id="DOB"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </span>

          <span className="phoneNumber">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              disabled
              type="number"
              name="phoneNumber"
              value={userData.mobile}
              id="phoneNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="78956-XXXXX"
              required=""
            />
          </span>

          <span className="altNumber">
            <label
              htmlFor="altNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Alternate Number
            </label>
            <input
              disabled
              type="number"
              name="altNumber"
              value={userData.altMobile}
              id="altNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="N/A"
              
            />
          </span>

          <span className="address">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              disabled
              value={userData.address}
              type="address"
              name="address"
              id="address"
              placeholder="89 LIG colony"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </span>

          <div className="flex gap-4">
            <span className="Address">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                disabled
                value={userData.city}
                type="city"
                name="city"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Indore"
                required=""
              />
            </span>

            <span className="phoneNumber">
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                State
              </label>
              <input
                disabled
                value={userData.state}
                type="state"
                name="state"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="M.P."
                required=""
              />
            </span>

            <span className="country">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                disabled
                value={userData.country}
                type="country"
                name="country"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="India"
                required=""
              />
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-center mt-4 py-2 bg-gray-200">
            Your Pets
          </h3>
          <div className="flex gap-20 items-center">
            {pets.map(({ imageUrl, name, breed, gender, description }) => (
              <PetProfileCard
                image={imageUrl}
                name={name}
                breed={breed}
                gender={gender}
                description={description}
              />
            ))}
            {/* {pets.map(({name,gender,breed,imageUrl})=>(<ProductCard image={imageUrl} name={name} price={gender} weight={breed}/>))} */}

            <CiMedicalCross
              onClick={() => setIsModalOpen(true)}
              size={100}
              title="Add A Pet"
            />
            <AddPetModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
