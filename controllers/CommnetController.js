const Comments = require("../models/comments");

// @desc      Get all Comments
// @route     GET /api/v1/comments
// @access    Public
exports.getComments = (req, res, next) => {
  Comments.find(req.query)
    .populate("auther")
    .then(
      comments => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(comments);
      },
      err => next(err)
    )
    .catch(err => next(err));
}


// @desc      Add Comment
// @route     POST /api/v1/comment
// @access    Private
exports.addComment = (req, res, next) => {
  if (req.body != null) {
    req.body.author = req.user._id;
    Comments.create(req.body)
      .then(
        comment => {
          Comments.findById(comment._id)
            .populate("author")
            .then(comment => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(comment);
            });
        },
        err => next(err)
      )
      .catch(err => next(err));
  } else {
    err = new Error("Comment not found in request body");
    err.status = 404;
    return next(err);
  }
}

// @desc      Update comment
// @route     PUT /api/v1/comments
// @access    Private
exports.updateComment = (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /comments/");
}


// @desc      Delete all Comments
// @route     DELETE /api/v1/comments
// @access    Private
exports.deleteComment = (req, res, next) => {
  Comments.remove({})
    .then(
      resp => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(resp);
      },err => next(err))
    .catch(err => next(err));
 }



// @desc      Get Single Comment by comment ID
// @route     GET /api/v1/comments/:commentId
// @access    Public
exports.getCommentById = (req, res, next) => {
  Comments.findById(req.params.commentId)
    .populate("auther")
    .then((comment) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(comment);
      }, (err) => next(err))
    .catch(err => next(err));
}


// @desc      Add comment By ID
// @route     POST /api/v1/comments/:commentId
// @access    Private
exports.addCommentById = (req, res, next) => {
  res.statusCode = 403;
  res.end(
    "POST operation not supported on /dishes/" +
      req.params.dishId +
      "/comments/" +
      req.params.commentId
  );
}


// @desc      Update comment by ID
// @route     PUT /api/v1/comment/:commentId
// @access    Private
exports.updateCommentById = (req, res, next) => {
  console.log("update....")
  Comments.findById(req.params.commentId)
    .then(
      (comment) => {
        if (comment != null) {
            if ( !comment.author.equals(req.user._id)){
              var err = new Error ('You are not authorized to update this comment! ')
              err.statusCode = 403;
              return next(err)                  
            }
          req.body.author = req.user._id;  
            Comments.findByIdAndUpdate(req.params.commentId, {
                $set: req.body
            }, {new: true})
          .then(
            comment => {
              Comments.findById(comment._id)
                .populate("author")
                .then(comment=> {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(comment);
                });
            },
            err => next(err));

        } else {
          err = new Error("Comment " + req.params.commentId + " not found");
          err.status = 404;
          return next(err);
        }
      },
      err => next(err))
    .catch(err => next(err));
}


// @desc      Delete Comment by ID
// @route     DELETE /api/v1/comments/:commentId
// @access    Private
exports.deleteCommentById = (req, res, next) => {
  Comments.findById(req.params.commentId)

    .then(
      comment => {
        if ( comment != null) {

          if (!comment.author.equals(req.user._id)) {
            var err = new Error("You are not authorized");
            err.status = 403;
            return next(err);
          }
          Comments.findByIdAndRemove(req.params.commentId)
            .then(
              resp => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(dish);
              },
              err => next(err))
            .catch(err => next(err));

        } else {
          err = new Error("Comment " + req.params.commentId + " not found");
          err.status = 404;
          return next(err);
        }
      },err => next(err))
    .catch(err => next(err));
}