const express = require("express");
const authenticate = require("../middleware/authenticate");
const promoRouter = express.Router();
const cors = require("../middleware/cors");

promoRouter.use(express.json());

const {
  getPromos,
  addPromos,
  updatePromos,
  deletePromos,
  getPromoById,
  addPromoById,
  updatePromoById,
  deletePromoById
} = require("../controllers/PromoController");

promoRouter
  .route("/")
  .get(cors.cors, getPromos)
  .post(cors.corsWithOptions, authenticate.verifyUser, addPromos)
  .put(cors.corsWithOptions, authenticate.verifyUser, updatePromos)
  .delete(cors.corsWithOptions, authenticate.verifyUser, deletePromos);

promoRouter
  .route("/:promoId")
  .get(cors.cors, getPromoById)
  .post(cors.corsWithOptions, authenticate.verifyUser, addPromoById)
  .put(cors.corsWithOptions, authenticate.verifyUser, updatePromoById)
  .delete(cors.corsWithOptions, authenticate.verifyUser, deletePromoById);

module.exports = promoRouter;