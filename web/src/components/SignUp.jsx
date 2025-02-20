import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserStore from "../Store/userStore";

import request from "../services/axios.service";

import BlueLogo from "../assets/FETCHMATE LOGO/BlueLogo.svg";
import { FaEye } from "react-icons/fa6";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    DOB: "",
    phoneNumber: "",
    altNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    password: "",
    terms: "",
  });

  const navigate = useNavigate();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
    return () => {};
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await request({
        url: "/auth/signup",
        data: formState,
        method: "POST",
      });
      if (!response.status) throw new Error(response.message);
      navigate("/login");
      return toast.success("Sign Up Successful", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const collectFormData = (e) => {
    const key = e.target.getAttribute("name");
    const newObj = { ...formState };
    if (e.target.name == "terms") {
      newObj[key] = e.target.checked;
    } else newObj[key] = e.target.value;
    setFormState(newObj);
  };

  return (
    <div className="flex sm:flex-row-reverse flex-col-reverse justify-center">
      <section className="flex flex-col justify-center items-center basis-2/4">
        <div className="m-8 p-4 rounded-3xl bg-gray-100">
          <div className="flex flex-col gap-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Get Started
            </h1>
            <form className=" flex flex-col gap-2">
              {/* Name */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  onChange={collectFormData}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="eg. John Doe"
                  className="bg-gray-50 border p-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex gap-4 items-center">
                <span className="Email basis-2/4 flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={collectFormData}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </span>

                <div className="DOB basis-2/4 flex flex-col gap-2">
                  <label
                    htmlFor="DOB"
                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date of Birth
                  </label>
                  <input
                    onChange={collectFormData}
                    type="date"
                    name="DOB"
                    id="DOB"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <span className="phoneNumber basis-2/4 flex flex-col gap-2">
                  <label
                    htmlFor="number"
                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    onChange={collectFormData}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="78956-XXXXX"
                    required=""
                  />
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="address"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  onChange={collectFormData}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="89 LIG colony"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <div className="flex gap-4">
                <span className="Address flex flex-col gap-2">
                  <label
                    htmlFor="city"
                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    onChange={collectFormData}
                    type="city"
                    name="city"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Indore"
                    required=""
                  />
                </span>

                <span className="phoneNumber flex flex-col gap-2">
                  <label
                    htmlFor="state"
                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <input
                    onChange={collectFormData}
                    type="state"
                    name="state"
                    id="state"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="M.P."
                    required=""
                  />
                </span>

                <span className="country flex flex-col gap-2">
                  <label
                    htmlFor="country"
                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>
                  <input
                    onChange={collectFormData}
                    type="country"
                    name="country"
                    id="country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="India"
                    required=""
                  />
                </span>
              </div>
              {/* <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={collectFormData}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 0   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div> */}
              <div style={{ display: "flex", position: "relative" }}>
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <FaEye
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  size={25}
                  className="absolute top-9 right-2 cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center h-5">
                  <input
                    onChange={collectFormData}
                    name="terms"
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 0  dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="/"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                onClick={submitForm}
                className="border-2 p-4 hover:bg-gray-200 my-4"
              >
                SignUp
              </button>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400 flex gap-2">
                <p>Already have an account? </p>
                <Link
                  to="/login"
                  className="font-medium text-blue-700 text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="basis-2/4 sm:py-0 pt-8 flex items-center justify-center">
        <img
          src={BlueLogo}
          alt="FetchMate Logo"
          className="h-auto sm:w-64 w-32"
        />
      </div>
    </div>
  );
};

export default SignUp;
