const express = require("express");
const cors = require("../middleware/cors");
const auth = require("../middleware/authenticate");

const favoriteRouter = express.Router();
favoriteRouter.use(express.json());

const {
  getFavorates,
  getFavorateById,
  addFavorates,
  addFavorateById,
  putFavorate,
  deleteFavorates,
  putFavorateById,
  deleteFavorateById
} = require("../controllers/FavoritesController");

favoriteRouter
  .route("/")
  .get(cors.cors, auth.verifyUser, getFavorates)
  .post(cors.corsWithOptions, auth.verifyUser, addFavorates)
  .put(cors.corsWithOptions, auth.verifyUser, putFavorate) 
  .delete(cors.corsWithOptions, auth.verifyUser, deleteFavorates);

favoriteRouter
  .route("/:dishId")
  .get(cors.cors, auth.verifyUser, getFavorateById)
  .post(cors.corsWithOptions, auth.verifyUser, addFavorateById)
  .put(cors.corsWithOptions, auth.verifyUser, putFavorateById)
  .delete(cors.corsWithOptions, auth.verifyUser, deleteFavorateById);

module.exports = favoriteRouter;
