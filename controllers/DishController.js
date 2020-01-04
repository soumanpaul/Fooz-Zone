const Dishes = require("../models/dishes");

// const ErrorResponse = require("../utils/errorResponse");
// const asyncHandler = require("../middleware/async");

// @desc      Get all Dish collections
// @route     GET /api/v1/dishes
// @access    Public
exports.getDishes = (req, res, next) => {
  Dishes.find(req.query)
    .populate("comments.author")
    .then(
      dishes => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(dishes);
      },
      err => next(err)
    )
    .catch(err => next(err));
};


// @desc      Create Single Dish
// @route     POST /api/v1/dishes
// @access    Private [only for Admin]
exports.createDish = (req, res, next) => {
  Dishes.create(req.body)
  .then((dish) => {
      console.log('Dish Created ', dish);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish);
  }, (err) => next(err))
  .catch((err) => next(err));
}

// @desc      Update Single Dish
// @route     PUT /api/v1/dishes
// @access    Not permited
exports.updateDish = (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
}

// @desc      Delete All Dishes
// @route     DELETE /api/v1/dishes
// @access    Private 
exports.deleteDishes = (req, res, next) => {
  Dishes.remove({})
      .then((resp) => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err))
}

// @desc      Get Single Dish
// @route     GET /api/v1/dishes/:dishId
// @access    Public
exports.getSingleDish = (req, res, next) => {
  Dishes.findById(req.params.dishId)
    .populate("comments.auther")
    .then(
      dish => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(dish);
      },
      err => next(err)
    )
    .catch(err => next(err));
}


// @desc      Create Single Dish
// @route     POST /api/v1/dishes/:dishId
// @access    Private [Only for Admin]
exports.createSingleDish = (req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation not supported on /dishes/" + req.params.dishId);
}


// @desc      Update Single Dish
// @route     PUT /api/v1/dishes/:dishId
// @access    Private [Only for Admin]
exports.updateSingleDish = (req, res, next) => {
  Dishes.findByIdAndUpdate(
    req.params.dishId,
    {
      $set: req.body
    },
    { new: true }
  )
    .then(
      dish => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(dish);
      },
      err => next(err)
    )
    .catch(err => next(err));
}


// @desc      Delete Single Dish
// @route     PUT /api/v1/dishes/:dishId
// @access    Private [Only for Admin]
exports.deleteSingleDishe = (req, res, next) => {
  Dishes.findByIdAndRemove(req.params.dishId)
    .then(
      dish => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(dish);
      },
      err => next(err)
    )
    .catch(err => next(err));
}