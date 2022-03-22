var express = require("express");
var passport = require("passport");
var authenticate = require("../middleware/authenticate");
var cors = require("../middleware/cors");

const {
  getUsers,
  signIn,
  signUp,
  logOut,
  facebookToken,
  checkToken
} = require("../controllers/UserController");

var userRouter = express.Router();
userRouter.use(express.json());

userRouter
  .route("/")
  .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, getUsers);

userRouter.route("/signup").post(cors.corsWithOptions, signUp);
userRouter.route("/login").post(cors.cors, cors.corsWithOptions,  signIn);
userRouter.route("/logout").get(cors.cors, logOut);

userRouter
  .route("/facebook/token")
  .get(passport.authenticate("facebook-token"), facebookToken);

userRouter.get("/checkJWTToken", cors.corsWithOptions, checkToken);

module.exports = userRouter;
