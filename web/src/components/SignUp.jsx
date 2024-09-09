import BlueLogo from "../assets/FETCHMATE LOGO/BlueLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import request from "../services/axios.service";
import { toast } from "react-toastify";

const SignUp = () => {
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

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await request({
        url: "/auth/signup",
        data: formState,
        method: "POST",
      });
      console.log("singup response : ", response);

      if (!response.status) throw new Error(response.message);
      navigate("/login");
      toast.success("Sign Up Successful", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // if(response.data.message=="Please Accept The Terms And Conditions")
      // if(response.data.message=="Validation Error Occured!") throw new Error(response.data.error[0])
      // if(response.data.error.code==11000) throw new Error(response.data.message)
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
    <>
      <div className="flex ">
        <section className="bg-gray-50 dark:bg-gray-900 flex-1 w-4/5">
          <div className="flex items-center justify-center py-6 ">
            {/* paper */}
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-2 md:space-y-4 sm:p-6">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Get Started
                </h1>
                <form className="space-y-4 md:space-y-6">
                  {/* Name */}
                  <div className="">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        onChange={collectFormData}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="eg. John Doe"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                  </div>

                  {/* Email and DOB */}
                  <div className="flex gap-4">
                    <span className="Email">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        onChange={collectFormData}
                        type="email"
                        name="email"
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
                        onChange={collectFormData}
                        type="date"
                        name="DOB"
                        id="DOB"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </span>
                  </div>

                  {/* contact number */}
                  <div className="flex gap-4">
                    <span className="phoneNumber">
                      <label
                        htmlFor="number"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        onChange={collectFormData}
                        type="text"
                        name="phoneNumber"
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
                        onChange={collectFormData}
                        type="text"
                        name="altNumber"
                        id="altNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </span>
                  </div>

                  {/* Address */}

                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      onChange={collectFormData}
                      type="text"
                      name="address"
                      id="address"
                      placeholder="89 LIG colony"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div className="flex gap-4">
                    <span className="Address">
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        onChange={collectFormData}
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
                        onChange={collectFormData}
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
                        onChange={collectFormData}
                        type="country"
                        name="country"
                        id="country"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="India"
                        required=""
                      />
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      onChange={collectFormData}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="*****"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        onChange={collectFormData}
                        name="terms"
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button onClick={submitForm} className="border-2 p-4">
                    SignUp
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="flex-1">
          <div className="flex h-5/6 w-full justify-center items-center">
            <img src={BlueLogo} alt="FetchMate Logo" className="h-48 w-48 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
