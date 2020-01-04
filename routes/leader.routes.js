const express = require("express");
const authenticate = require("../middleware/authenticate");
const leaderRouter = express.Router();
const cors = require("../middleware/cors");

const {
  options,
  getLeaders,
  addLeader,
  updateLeader,
  deleteLeader,
  optionss,
  addLeaderById,
  deleteLeaderById,
  getLeaderById,
  updateLeaderById
} = require("../controllers/LeaderController");

leaderRouter.use(express.json());

leaderRouter
  .route("/")
  .options(cors.corsWithOptions, options)
  .get(cors.cors, getLeaders)
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    addLeader
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    updateLeader
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    deleteLeader
  );

leaderRouter
  .route("/:leaderId")
  .options(cors.corsWithOptions, optionss)
  .get(cors.cors, getLeaderById)
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    addLeaderById
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    updateLeaderById
  )

  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    deleteLeaderById
  );

module.exports = leaderRouter;
