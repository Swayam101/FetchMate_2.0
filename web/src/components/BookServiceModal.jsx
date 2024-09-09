import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import request from "../services/axios.service";
import useUserStore from "../Store/userStore";
import SecondryPetSitterCard from "./SecondryPetSitterCard";
import { toast } from "react-toastify";

const BookServiceModal = ({ isModalOpen, setIsModalOpen }) => {
  const [myPets, setMyPets] = useState([{ _id: "", name: "" }]);

  const [loading, setLoading] = useState(true);

  const [petSitter, setPetSitter] = useState([
    { sameCity: { city: "", name: "", profileUrl: "" } },
  ]);
  const token = useUserStore((state) => state.jwtToken);

  const [selected, setSelected] = useState(0);

  const [formState, setFormState] = useState({});

  const getMyPets = async () => {
    const response = await request({
      method: "GET",
      url: "/pet",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.data.status) throw new Error(response.data.message);
    setMyPets(response.pets);
  };

  const getLocals = async () => {
    const response = await request({
      url: "/auth/same-city",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.data.status) throw new Error(response.data.message);
    setPetSitter(response.data.locals);
  };

  useEffect(() => {
    const fetchData = async () => {
      getMyPets();
      getLocals();
    };
    fetchData()
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const collectFormData = (e) => {
    const key = e.target.getAttribute("name");
    const newObj = { ...formState };
    newObj[key] = e.target.value;
    setFormState(newObj);
  };
  const sendRequest = () => {
    const newObj = { ...formState };
    newObj["petSitter"] = petSitter[selected].sameCity._id;
    setFormState(newObj);
    request({
      url: "/service",
      method: "POST",
      data: formState,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.data.status) throw new Error(res.data.error[0]);
        console.log(res.data);
        toast.success("Request Send Successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  if (loading) return <div>Loading Stuff</div>;
  return (
    <ReactModal
      style={{
        content: {
          height: "80%",
          width: "50%",
          left: "25%",
          top: "13%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "2%",
          paddingRight: "3%",
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Register Your Pet"
    >
      <div className="flex flex-col gap-6 h-full">
        <div className="text-2xl font-bold text-center">Book A Service</div>

        <select
          onChange={collectFormData}
          name="petDetails"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="none"> none</option>
          {myPets.map(({ _id, name }, index) => (
            <option value={_id} key={"pet-select-options" + index}>
              {name}
            </option>
          ))}
        </select>

        <label htmlFor="pickup" className="font-bold">
          Enter Pickup Time
        </label>
        <input
          id="pickup"
          onChange={collectFormData}
          type="datetime-local"
          name="pickUpTime"
          placeholder="Enter Pet Breed"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label htmlFor="drop" className="font-bold">
          Enter Drop Time
        </label>
        <input
          id="drop"
          onChange={collectFormData}
          type="datetime-local"
          name="dropTime"
          placeholder="Enter Pet Breed"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <select
          onChange={collectFormData}
          name="serviceType"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="daycare">Pet Day Care</option>
          <option value="dogwalking">Dog Walking</option>
          <option value="overnight">Overnight Stay</option>
          <option value="birdwatching">Bird Watching</option>
          <option value="training">Pet Training</option>
          <option value="socialisation">Pet Socialisation</option>
        </select>
        <div className="text-center font-black text-xl">Select Pet Sitter</div>
        <div className="flex flex-wrap gap-4">
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

        <div className="text-center ">
          <button
            onClick={sendRequest}
            className="border-2 p-2 text-cyan-300 border-yellow-40"
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default BookServiceModal;
