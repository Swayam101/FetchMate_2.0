import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserStore from "../Store/userStore";
import request from "../services/axios.service";
import OrangeIconNameLogo from "../assets/FETCHMATE LOGO/Secondary Logo/IconNameOrange.svg";
import { FaEye } from "react-icons/fa6";
import { IoPaw } from "react-icons/io5";

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
    if (e.target.name === "terms") {
      newObj[key] = e.target.checked;
    } else {
      newObj[key] = e.target.value;
    }
    setFormState(newObj);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <Link to="/" className="flex justify-center mb-8">
            <img src={OrangeIconNameLogo} alt="FetchMate Logo" className="h-16" />
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join FetchMate and give your pets the care they deserve
          </p>
        </div>

        <form onSubmit={submitForm} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                onChange={collectFormData}
                type="text"
                name="name"
                id="name"
                placeholder="eg. John Doe"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                onChange={collectFormData}
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="DOB" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                onChange={collectFormData}
                type="date"
                name="DOB"
                id="DOB"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                onChange={collectFormData}
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="78956-XXXXX"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                onChange={collectFormData}
                type="text"
                name="address"
                id="address"
                placeholder="89 LIG colony"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                onChange={collectFormData}
                type="text"
                name="city"
                id="city"
                placeholder="Indore"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                onChange={collectFormData}
                type="text"
                name="state"
                id="state"
                placeholder="M.P."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                onChange={collectFormData}
                type="text"
                name="country"
                id="country"
                placeholder="India"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Password */}
            <div className="md:col-span-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={collectFormData}
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="md:col-span-2">
              <div className="flex items-center">
                <input
                  onChange={collectFormData}
                  name="terms"
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-[#FF9F1C] focus:ring-[#FF9F1C] border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I accept the{" "}
                  <a href="/" className="font-medium text-[#FF9F1C] hover:text-[#e68f1a]">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#FF9F1C] hover:bg-[#e68f1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F1C] transition-colors"
            >
              <IoPaw />
              Create Account
            </button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-[#FF9F1C] hover:text-[#e68f1a]">
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
