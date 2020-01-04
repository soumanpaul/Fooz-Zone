const express = require("express");
const authenticate = require("../middleware/authenticate");
const multer = require("multer");
const cors = require("../middleware/cors");

const {
  addImage,
  updateImage,
  deleteImage,
  getImage
} = require("../controllers/uploadController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("You can upload only image files!"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFileFilter });
const uploadRouter = express.Router();

uploadRouter.use(express.json());

uploadRouter
  .route("/")
  .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, getImage)
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    // authenticate.verifyAdmin,
    upload.single("imageFile"),
    addImage
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    updateImage
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    deleteImage
  );

module.exports = uploadRouter;

