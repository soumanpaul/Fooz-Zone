const Promos = require('../models/promos');

// @desc      Get all Promos
// @route     GET /api/v1/promos
// @access    Public
exports.getPromos = (req, res, next) => {
  Promos.find(req.query)
      .then((promos)=> {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(promos);
      }, (err) =>  next(err))
      .catch((err) => next(err));
}


// @desc      Add new Promo
// @route     POST /api/v1/promos
// @access    Private
exports.addPromos =  (req, res, next) =>{
  Promos.create(req.body)
      .then((promo) => {
          console.log('promo created', promo);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(promo);
      }, (err) => next(err))
      .catch((err) => next(err))
}


// @desc      Update Promos
// @route     PUT /api/v1/promos
// @access    Private
exports.updatePromos= (req, res, next) =>{
  res.statusCode = 403;
  res.end('PUT operations not supported on /promotions');
}


// @desc      Delete all Promos
// @route     DELETE /api/v1/promos
// @access    Private
exports.deletePromos = (req, res, next) => {
  Promos.remove({})
      .then((promo) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(promo);
      }, (err) => next(err))
      .catch((err) => next(err))
}

// @desc      Get all Promo By ID
// @route     GET /api/v1/promos/:promoId
// @access    Public
exports.getPromoById =  (req, res, next) => {
  Promos.findById(req.params.promoId)
      .then((prom) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(prom)
      }, (err) => next(err))
      .catch((err) => next(err))
}

// @desc      Add Promo By ID
// @route     POST /api/v1/promos/:promoId
// @access    Private
exports.addPromoById = (req, res, next) =>{
  res.end('Will add ths promotions: ' + req.body.name +
      ' With details descriptions ' + req.body.description);
}


// @desc      Update Promo By ID
// @route     UPDATE /api/v1/promos/:promoId
// @access    Private
exports.updatePromoById = (req, res, next) =>{
  Promos.findByIdAndUpdate(req.params.promoId, {
      $set: req.body }, { new: true })
      .then((promo) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json')
          res.json(promo)
      }, (err) => next(err))
      .catch((err) =>  next(err))
}

// @desc      Delete Promo By ID
// @route     DELETE /api/v1/promos/:promoId
// @access    Private
exports.deletePromoById = (req, res, next) => {
  Promos.findByIdAndDelete(req.params.promoId)
      .then((promo) => {
          res.statusCode =200;
          res.setHeader('Content-Type', 'application/json');
          res.json(promo)
      }, (err) => next(err))
      .catch((err) => next(err))
}