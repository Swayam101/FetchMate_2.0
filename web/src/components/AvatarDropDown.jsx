import React from "react";
import useUserStore from "../Store/userStore";
import { Link, useNavigate } from "react-router-dom";

const AvatarDropDown = ({ displayState }) => {
  const logout = useUserStore((state) => state.logOut);

  const navigate = useNavigate();
  return (
    <div
      style={{ right: "2.5%", padding: "1.5%" }}
      id="dropdown"
      className={`rounded-2xl ${
        displayState ? "absolute" : "hidden"
      } bg-gray-100 text-white flex flex-col items-center justify-around gap-4`}
    >
      <Link to={"/userprofile"}>
        <div className="text-white p-2 rounded-xl bg-yellow-400">
          My Profile
        </div>
      </Link>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="border-2 w-fit p-2 rounded-lg bg-white text-yellow-300"
      >
        LogOut
      </button>
    </div>
  );
};

export default AvatarDropDown;
