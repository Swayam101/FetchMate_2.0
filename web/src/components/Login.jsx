import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import request from "../services/axios.service";
import useUserStore from "../Store/userStore";
import OrangeIconNameLogo from "../assets/FETCHMATE LOGO/Secondary Logo/IconNameOrange.svg";
import { FaEye } from "react-icons/fa6";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const setToken = useUserStore((state) => state.setJwtToken);
  const setUserData = useUserStore((state) => state.setUserData);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
    return () => {};
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await request({
        method: "POST",
        url: "/auth/login",
        data: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
      });

      if (!response.status)
        return toast.error(response.message, {
          toastId: "login-error-message",
        });

      setToken(response.data.accessToken);
      setUserData(response.data.responseUser);
      navigate("/");
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
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

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 mx-auto sm:basis-2/4">
        {/* Logo */}
        <NavLink
          to={"/"}
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src={OrangeIconNameLogo} alt="FetchMate Logo" className="h-14" />
        </NavLink>
        {/* Form */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            {/* InputFields */}
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g.jacknorm@gmail.com"
                  required=""
                />
              </div>
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
                    ref={passwordRef}
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
              <button
                onClick={loginUser}
                className="w-full text-white bg-yellow-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              {/* Sign up Link */}
              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-blue-600 hover:underline dark:text-primary-500 "
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
