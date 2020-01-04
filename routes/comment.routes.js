const express = require("express");
const authenticate = require("../middleware/authenticate");
const cors = require("../middleware/cors");

const commentRouter = express.Router();
commentRouter.use(express.json());

const {
  getComments,
  addComment,
  updateComment,
  deleteComment,
  getCommentById,
  addCommentById,
  updateCommentById,
  deleteCommentById
} = require("../controllers/CommnetController");

commentRouter
  .route("/")
  .get(cors.cors, getComments)
  .post(cors.corsWithOptions, authenticate.verifyUser, addComment)
  .put(cors.corsWithOptions, authenticate.verifyUser, updateComment)
  .delete(
    cors.corsWithOptions,
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    deleteComment
  );

commentRouter
  .route("/:commentId")
  .get(cors.cors, authenticate.verifyUser, getCommentById)
  .post(cors.corsWithOptions, authenticate.verifyUser, addCommentById)
  .put(cors.cors, authenticate.verifyUser, updateCommentById)
  .delete(cors.corsWithOptions, authenticate.verifyUser, deleteCommentById);

module.exports = commentRouter;
