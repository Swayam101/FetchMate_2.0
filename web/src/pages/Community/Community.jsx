import React, { useEffect, useState } from "react";

import Nehu from "../../assets/nehu.png";
import BlogCard from "../../components/BlogCard";
import PetSitterCard from "../../components/PetSitterCard";
import UploadBlogModal from "../../components/community/UploadBlogModal";

import useUserStore from "../../Store/userStore";
import request from "../../services/axios.service";
import { Link } from "react-router-dom";

const Community = () => {
  const [blogAddModal, setBlogAddModal] = useState(false);
  const [blogs, setBlogs] = useState([{ author: { profileUrl: "profile" } }]);
  const token = useUserStore((state) => state.jwtToken);
  const userData = useUserStore((state) => state.userData);

  useEffect(() => {
    request({
      method: "GET",
      url: "/blog",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBlogs(response.data.blogs);
    });
  }, []);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-appear");
      else entry.target.classList.remove("animate-appear");
    });
  });

  const appearers = document.querySelectorAll(".anim");
  appearers.forEach((el) => observer.observe(el));

  return (
    <div className="grid grid-cols-4 gap-2 mt-10 ">
      <div className="col-span-1 h-fit gap-4 px-6 py-6 flex flex-col items-center community-component-shadow">
        <div className="rounded-full gap-2 w-full flex flex-col items-center justify-around h-1/3">
          <img
            style={{ width: "25%" }}
            className=" rounded-full"
            src={Nehu}
            alt=""
          />{" "}
          <div className="text-center font-bold pt-3">Nehal Patidar</div>
          <Link to={"/services"}>
            <button className="border-3 p-2 text-cyan-500 border-cyan-500 rounded-xl">
              Book Pet Service
            </button>
          </Link>
          <div
            style={{ height: "1%", borderWidth: "1px" }}
            className="w-full mt-4 bg-gray-700 border-gray-700"
          ></div>
        </div>

        <div className="w-full h-4/6">
          <div style={{ height: "10%" }} className="w-full">
            Event
          </div>
          <div style={{ height: "90%" }} className="pt-24 text-gray-500">
            You will be notified about upcoming community events here
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col">
        <div
          style={{ height: "10%" }}
          className="thumb flex items-center justify-center gap-4"
        >
          <img
            className="rounded-full h-16 w-16"
            src={userData.profileUrl}
            alt=""
          />
          <input
            style={{ borderRadius: "4%/50%", cursor: "pointer" }}
            className="w-3/4 h-10 px-4 rounded-lg border-2"
            placeholder="Let The Thought Out!"
            onClick={() => {
              setBlogAddModal(true);
            }}
          />
          <UploadBlogModal
            isModalOpen={blogAddModal}
            setIsModalOpen={setBlogAddModal}
          />
        </div>
        <div className="mt-12 flex flex-col gap-4 mx-4">
          {blogs.map(({ author, title, content }) => {
            return (
              <BlogCard
                image={author.profileUrl}
                username={author.name}
                content={content}
                title={title}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-1 flex gap-4 flex-col pt-2">
        <div className="text-center text-xl font-bold">
          Pet Sitters Of The Week
        </div>
        <div>
          <PetSitterCard />
          <UploadBlogModal />
        </div>
      </div>
    </div>
  );
};

export default Community;
