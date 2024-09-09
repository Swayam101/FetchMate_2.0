require("dotenv").config();

const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const {CloudinaryStorage}=require('multer-storage-cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const getCloudinaryConfig=(folderName)=>{
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: folderName,
    },
  });
 return upload=multer({storage})
}



module.exports = getCloudinaryConfig;
