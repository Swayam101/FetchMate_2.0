import React, { useState } from "react";
import Nehu from "../assets/nehu.png";
import { AiOutlineLike, AiFillLike,AiOutlineShareAlt } from "react-icons/ai";

const BlogCard = ({image,username,content,title}) => {
  const [likeState, setLikeState] = useState(false);
  const [shareState,setShareState]=useState(0)
  return (
    <div className="bg-white community-component-shadow flex flex-col gap-6 py-8 px-6">
      <div className="thumb flex gap-6 items-center">
        <img className="rounded-full w-14 h-14" src={image} alt="" />
        <div>
          <div className="font-bold text-base">{username}</div>
          <div className="text-base text-gray-500">{title}</div>
        </div>
      </div>
      <div className="leading-relaxed">
        {content}
      </div>
      <div className="flex gap-6">
        <div
          style={{ padding: "0.5%",width:"15%" }}
          onClick={(e) => setLikeState(!likeState)}
          className="border-2 border-gray-400 flex gap-2 justify-center items-center"
        >
          {likeState ? (
            <AiFillLike size={25} className="text-red-400 like-animation" />
          ) : (
            <AiOutlineLike size={25} className="like-animation" />
          )}
          <div className="text-base font-bold">Like</div>
        </div>
        <div
        onClick={()=>setShareState(1)}
        onAnimationEnd={()=>setShareState(0)}
        sharestate={shareState}
          style={{ padding: "0.5%",width:"15%" }}
          className="border-2 border-gray-400 flex gap-2 justify-center items-center">
          <AiOutlineShareAlt onClick={(e)=>{e.target}} className={shareState?"like-animation":""} size={25}/>
          <div className="text-base font-bold">Share</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
