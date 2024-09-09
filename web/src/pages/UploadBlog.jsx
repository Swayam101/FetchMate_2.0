import React, { useRef, useState, useForm } from "react";

// import axios from "axios";

const UploadBlog = () => {
  const [productImg, setProductImg] = useState(null);
  const titleRef = useRef();
  const contentRef = useRef();

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    setProductImg(file);
    console.log(productImg);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    blogData.append("title", titleRef.current.value);
    blogData.append("content", contentRef.current.value);
    blogData.append("image", productImg);
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/blog",
      data:blogData,
      headers:{
        'Content-Type':'multipart/form-data'
      }
    });
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} method="POST">
        <input
          ref={titleRef}
          type="text"
          name="title"
          placeholder="Enter Title"
        />
        <input
          ref={contentRef}
          type="text"
          name="content"
          placeholder="Enter Content"
        />
        <input type="file" name="file" onChange={handleProductImageUpload} />
        {productImg ? <img src={productImg} alt="" /> : "Image Previw Here!"}
        <input type="submit" value={"Submit Form!"} />
      </form>
    </div>
  );
};

export default UploadBlog;
