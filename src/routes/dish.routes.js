const express = require("express");
const authenticate = require("../middleware/authenticate");
const cors = require("../middleware/cors");

const dishRouter = express.Router();

dishRouter.use(express.json());

const {
  getDishes,
  createDish,
  updateDish,
  deleteDishes,
  getSingleDish,
  createSingleDish,
  deleteSingleDishe,
  updateSingleDish
} = require("../controllers/DishController");

// @desc
// @route
dishRouter
  .route("/")
  .get(cors.cors, getDishes)
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    createDish
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    updateDish
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    deleteDishes
  );

// @desc
// @route
dishRouter
  .route("/:dishId")
  .get(cors.cors, getSingleDish)
  .post(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    createSingleDish
  )
  .put(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    updateSingleDish
  )
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    deleteSingleDishe
  );

module.exports = dishRouter;
