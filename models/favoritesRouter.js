// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('./cors');
// const auth = require('../authenticate');

// const Favorites = require('../models/favorite');


// const favoriteRouter = express.Router();

// favoriteRouter.use(bodyParser.json())

// // favorites

// favoriteRouter.route('/')
//   .get(cors.corsWithOptions, auth.verifyUser, (req, res, next) => {
//       Favorites.findOne({ user: req.user._id })
//         .populate(['user', 'dishes'])
//         .then(favorite => res.json(favorite))
//         .catch(err => next(err));
//   })
  
//   .post(cors.corsWithOptions, auth.verifyUser, (req, res, next) => {
//     Favorites.findOne({ user: req.user._id })
//       .then(favorite => {
//         if (!favorite) {
//           return Favorites.create({ user: req.user._id, dishes: req.body });
//         } else {
//           req.body.forEach(({ _id }) => {
//             if (favorite.dishes.indexOf(_id) < 0) {
//               favorite.dishes.push (_id);
//             }
//           });
//           return favorite.save();
//         }
//       })
//       .then(favorite => Favorites.findById(favorite._id).populate(['user', 'dishes']))
//       .then(favorite => res.json(favorite))
//       .catch(err => next(err));
//   })



//   .delete(cors.corsWithOptions, auth.verifyUser, (req, res) => {
//     Favorites.findByIdAndRemove({ user: req.user._id })
//       .then(favorite => Favorites.findById(favorite._id).populate(['user', 'dishes']))
//       .then(favorite => res.json(favorite))
//       .catch(err => next(err));
//   });



// // favorites/  .................... :dishId'  

// favoriteRouter.route('/:dishId')
//   .get(cors.cors, auth.verifyUser, (req, res, next) => {
//     Favorites.findOne({ user: req.user._id })
//     .populate(['user', 'dishes'])
//     .then(favorites => {
//       if(!favorites) {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         return res.json({"exists": false, "favorites": favorites})
//       } else{
//         if (favorites.dishes.indexOf(req.params.dishId) < 0){
//           res.statusCode = 200;
//           res.setHeader('Content-Type', 'applicayion/json')
//           res.json({ 'exists': exists, 'favorites': favorites });
//         }    
//         else {
//           res.statusCode = 200;
//           res.setHeader('Content-Type', 'application/json');
//           return res.json({"exists": false, "favorites": favorites})
//         }
//       }
//       const exists = favorite && favorite.dishes.indexOf(req.params.dishId) >= 0;
//             res.json({ 'exists': exists, 'favorites': favorite });
//           })
//           .catch(err => next(err));
//   })
//   .post(cors.corsWithOptions, auth.verifyUser, (req, res, next) => {
//       Favorites.findOne({ user: req.user._id })
//           .then(favorite => {
//             if (!favorite) {
//               return Favorites.create({ user: req.user._id, dishes: [req.params.dishId] });
//             } else {
//               if (favorite.dishes.indexOf(req.params.dishId) < 0) {
//                 favorite.dishes.push(req.params.dishId);
//               }
//               return favorite.save();
//             }
//           })
//           .then(favorite => Favorites.findById(favorite._id).populate(['user', 'dishes']))
//           .then(favorite => res.json(favorite))
//           .catch(err => next(err));
//     })
//     .delete(cors.corsWithOptions, auth.verifyUser, (req, res, next) => {
//       Favorites.findOne({ user: req.user._id })
//           .then(favorite => {
//             if (!favorite || favorite.dishes.indexOf(req.params.dishId) < 0) {
//               return Promise.reject(
//                   createError(404, `Dish ${req.params.dishId} not in favorites.`));
//             } else {
//               favorite.dishes.pull(req.params.dishId);
//               return favorite.save();
//             }
//           })
//           .then(favorite => Favorites.findById(favorite._id).populate(['user', 'dishes']))
//           .then(favorite => res.json(favorite))
//           .catch(err => next(err));
//     });

// module.exports = favoriteRouter;
