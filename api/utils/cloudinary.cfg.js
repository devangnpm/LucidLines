const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary, // this is cloudinary instance that holds cloudinary cfg defined above
    params: { 
      folder: 'blogapp', //folder where image will be upload in cloudinary
      allowedFormats: ['jpg', 'jpeg', 'png'],
      transformation: [
        { width: 500, height: 300, crop: 'scale' } // scale down the image to fit within 400x300 maintaining aspect ratio
      ],
    }, 
  });

module.exports = storage;
