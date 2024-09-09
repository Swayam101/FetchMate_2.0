import React, { useRef } from "react";
import ReactModal from "react-modal";
import request from "../../services/axios.service";
import useUserStore from "../../Store/userStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UploadBlogModal = ({ isModalOpen, setIsModalOpen }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const token = useUserStore((state) => state.jwtToken);
  const userData = useUserStore((state) => state.userData);
  const navigate = useNavigate();

  const submitBlog = () => {
    request({
      url: "/blog",
      method: "POST",
      data: {
        title: titleRef.current.value,
        content: contentRef.current.value,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.data.status) throw new Error(res.data.error[0]);
        setIsModalOpen(false);
        toast.success("Blog Uploaded Successfully!");
        navigate(0);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <ReactModal
      style={{
        content: {
          height: "75%",
          width: "50%",
          left: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "2%",
          paddingRight: "3%",
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <div className="flex flex-col gap-6 h-full">
        <div className="font-bold text-2xl text-center">Release A Post!</div>
        <div style={{ height: "10%" }} className="thumb flex gap-4 sm:px-10">
          <img className="rounded-full" src={userData.profileUrl} alt="" />
          <div>
            <div>
              <div className="text-xl font-bold">{userData.name}</div>
            </div>
            <div className="text-sm text-gray-500">{userData.roles[2]}</div>
          </div>
        </div>
        <input
          style={{ padding: "1%" }}
          ref={titleRef}
          placeholder="Enter Post Title"
          type="text"
          className="w-full border-2 border-black rounded-2xl"
        />
        <textarea
          placeholder="Enter Post Content"
          ref={contentRef}
          style={{ padding: "3%" }}
          className="w-full rounded-lg block resize-none mx-auto border-2 border-gray-500"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div>
          {" "}
          <button
            onClick={submitBlog}
            className="border-3 active:scale-90 active:border-white border-black p-2 rounded-xl bg-yellow-400"
          >
            Submit
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default UploadBlogModal;
