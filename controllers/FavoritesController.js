const Favorites = require("../models/favorite");


// @desc      Get all Dish collections
// @route     GET /api/v1/promotions
// @access    Private
exports.getFavorates = (req, res, next) => {
  Favorites.findOne({ user: req.user._id })
    .populate("user")
    .populate("dishes")
    .exec((err, favorites) => {
      if (err) return next(err);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(favorites);
    });
};

// @desc      Add new Dishs in Favorite
// @route     POST /api/v1/promos
// @access    Private
exports.addFavorates = (req, res, next) => {
  Favorites.findOne({ user: req.user._id }, (err, favorite) => {
    if (err) return next(err);

    if (!favorite) {
      Favorites.create({ user: req.user._id })
        .then(favorite => {
          for (i = 0; i < req.body.length; i++){
            if (favorite.dishes.indexOf(req.body[i]._id) < 0)
              favorite.dishes.push(req.body[i]);
            }
          favorite
            .save()
            .then(favorite => {
              Favorites.findById(favorite._id)
                .populate('user')
                .populate('dishes')
                .then(favorite => {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(favorite);
                });
            })
            .catch(err => {
              return next(err);
            });
        })
        .catch(err => {
          return next(err);
        });
    } else {
      for (i = 0; i < req.body.length; i++){
        if (favorite.dishes.indexOf(req.body[i]._id) < 0) 
          favorite.dishes.push(req.body[i]);}
      favorite
        .save()
        .then(favorite => {
          Favorites.findById(favorite._id)
          .populate('user')
          .populate('dishes')
            .then(favorite => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(favorite);
            });
        })
        .catch(err => {
          return next(err);
        });
    }
  })
  .catch(err => next(err));
};

// @desc      Change Favorate
// @route     PUT /api/v1/promos
// @access    Private
exports.putFavorate = (req, res, next) => {
  res.statusCode = 403;
  res.setHeader("Content-Type", "text/plain");
  res.end("PUT operation not supported on /dishes" + req.params.dishId);
};

// @desc      Delete dish from favorate
// @route     DELETE /api/v1/promos
// @access    Private
exports.deleteFavorates = (req, res) => {
  Favorites.remove({})
  .then((resp) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err))
};


// @desc      Get Single Favorate Dish
// @route     GET /api/v1/promos/:dishId
// @access    Private
exports.getFavorateById = (req, res, next) => {
  Favorites.findOne({ user: req.user._id })
    .populate(["user", "dishes"])
    .then(
      favorites => {
        if (!favorites) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          return res.json({ exists: false, favorites: favorites });
        } else {
          if (favorites.dishes.indexOf(req.params.dishId) < 0) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "applicayion/json");
            res.json({ exists: false, favorites: favorites });
          } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            return res.json({ exists: true, favorites: favorites });
          }
        }

        // const exists = favorite && favorite.dishes.indexOf(req.params.dishId) >= 0;
        //       res.json({ 'exists': exists, 'favorites': favorite });
      },
      err => next(err)
    )
    .catch(err => next(err));
};

// @desc      Get Single Favorate Dish
// @route     POST /api/v1/promos/:dishId
// @access    Private
exports.addFavorateById = (req, res, next) => {
  Favorites.findOne({ user: req.user._id }, (err, favorite) => {
    if (err) return next(err);

    if (!favorite) {
      Favorites.create({ user: req.user._id })
        .then(favorite => {
          favorite.dishes.push({ _id: req.params.dishId });
          favorite
            .save()
            .then(favorite => {
              Favorites.findById(favorite._id)
                .populate("user")
                .populate("dishes")
                .then(favorite => {
                  console.log('Favorite created!')
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(favorite);
                });
            })
            .catch(err => {
              return next(err);
            });
        })
        .catch(err => {
          return next(err);
        });
    } else {
      if (favorite.dishes.indexOf(req.params.dishId) < 0) {
        favorite.dishes.push({ _id: req.params.dishId });
        favorite
          .save()
          .then(favorite => {
            Favorites.findById(favorite._id)
              .populate("user")
              .populate("dishes")
              .then(favorite => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(favorite);
              });
          })
          .catch(err => {
            return next(err);
          });
      } else {
        res.statusCode = 403;
        res.setHeader("Content-Type", "text/plain");
        res.end("Dish " + req.params.dishId + "already added");
      }
    }
  });
};

// @desc      Change Favorate
// @route     PUT /api/v1/promos/:dishId
// @access    Private
exports.putFavorateById = (req, res, next) => {
  res.statusCode = 403;
  res.setHeader("Content-Type", "text/plain");
  res.end("PUT operation not supported on /favorites" + req.params.dishId);
};

// @desc      Change Favorate
// @route     DELETE /api/v1/promos/:dishId
// @access    Private
exports.deleteFavorateById = (req, res, next) => {
  Favorites.findOne({ user: req.user._id }, (err, favorite) => {
    if (err) return next(err);

    console.log(favorite);
    var index = favorite.dishes.indexOf(req.params.dishId);
    if (index >= 0) {
      favorite.dishes.splice(index, 1);
      favorite
        .save()
        .then(favorite => {
          Favorites.findById(favorite._id)
            .populate("user")
            .populate("dishes")
            .then(favorite => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(favorite);
            });
        })
        .catch(err => {
          return next(err);
        });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Dish " + req.params._id + "not in your favorate");
    }
  });
};
