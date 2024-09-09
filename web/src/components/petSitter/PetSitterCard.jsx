import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import axios from "../../utils/axiosConfig";
import useUserStore from "../../Store/userStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AcceptedButton = () => {
  return (
    <button className="border-2 border-black w-full p-2 bg-green-400 text-white text-xl">
      Accepted{" "}
    </button>
  );
};

const RejectedButton = () => {
  return (
    <button className="border-2 p-2 w-full  bg-red-400 text-white text-xl">
      Rejected{" "}
    </button>
  );
};

const PetSitterCard = ({
  image,
  name,
  serviceType,
  phone,
  email,
  address,
  setPetModal,
  reqId,
  initialStatus,
  pickUpTime
}) => {
  const token = useUserStore((status) => status.jwtToken);

  const navigate = useNavigate();

  const reactOnRequest = async (status) => {
    const response = await axios({
      method: "POST",
      url: `/service/${reqId}/${status}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (status == "accepted") toast.success("Request Accepted Successfully!");
    else toast.warn("Request Rejected");
    window.location.reload(true);
  };

  const deleteRequestHandler=async ()=>{
    
      const response=await axios({
        method: "DELETE",
        url: `/service/${reqId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    if(response.data.status==true) toast.success("Request Deleted Successfully!")
  }

  return (
    <div className="max-w-xs">
      <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={image}
            alt="John Doe"
          />
        </div>
        <div class="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{serviceType}</p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  Address
                </td>
                <td className="px-2 py-2">{address}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td className="px-2 py-2">{phone}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{email}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Pick Up Time:</td>
                <td className="px-2 py-2">{(new Date(pickUpTime)).toLocaleString("en-US")}</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center  gap-4 px-4 my-3">
            <button
              onClick={() => setPetModal(true)}
              className="text-base text-white bg-yellow-400 p-2 border-2 border-cyan-400 rounded-lg italic font-medium"
              href="#"
            >
              Pet Details
            </button>
           
          </div>
          {initialStatus == "hanging" ? (
            <div className="flex justify-center gap-6">
              <div
                className="hover:scale-125"
                onClick={async () => {
                  await reactOnRequest("accepted");
                }}
              >
                <svg
                  className="text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="currentColor"
                    d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z"
                  ></path>
                </svg>
              </div>

              <div
                className="hover:scale-125"
                onClick={async () => {
                  await reactOnRequest("rejected");
                }}
              >
                <svg
                  className="text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="currentColor"
                    d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z"
                  ></path>
                </svg>
              </div>
            </div>
          ) : initialStatus == "accepted" ? (
            <div className="text-center px-6">
              <AcceptedButton />
            </div>
          ) : (
            <div className="text-center flex justify-center gap-4 items-center px-6">
              <RejectedButton /> <MdDelete onClick={deleteRequestHandler} className="text-red-700 cursor-pointer" size={30} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetSitterCard;
