const Leader = require('../models/leaders')

exports.options = (req, res) => {
  res.sendStatus(200);
}

// @desc      Get all Leaders
// @route     GET /api/v1/leader
// @access    Publick
exports.getLeaders = (req, res, next) => {
  Leader.find(req.query)
      .then((leader) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(leader);
      }, (err) => next(err))
      .catch((err) => next(err))
}


// @desc      Add Leader
// @route     POST /api/v1/leader
// @access    Private [ only for admin]
exports.addLeader = (req, res, next) =>{
  Leader.create(req.body)
      .then((leader) => {
          res.statusCode =200;
          res.setHeader('Content-Type', 'application/json');
          res.json(leader);
      }, (err) => next(err))
      .catch((err) => next(err))
}

// @desc      Update Leader
// @route     PUT /api/v1/leader
// @access    Private
exports.updateLeader = (req, res, next) =>{
  res.statusCode = 403;
  res.json('PUT operations not supported on /leaders');
}


// @desc      Delete Leader
// @route     DELETE /api/v1/leader
// @access    Private
exports.deleteLeader = (req, res, next) => {
  Leader.delete({})
      .then((res) => {
          res.statusCode =200;
          res.setHeader('Content-Type', 'application/json');
          res.json(res);
      }, (err) => next(err))
      .catch((err) => next(err))
}



// @desc      Get all Leaders
// @route     GET /api/v1/leader/:leaderId
// @access    Public
exports.optionss = (req, res) => {
  res.sendStatus(200);
}


// @desc      Get Leader by ID
// @route     GET /api/v1/leader/:leaderId
// @access    Public
exports.getLeaderById = (req, res, next) => {
  Leader.findById(req.params.leaderId)
    .then(
      leader => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/josn");
        res.json(leader);
      },
      err => next(err)
    )
    .catch(err => next(err));
}

// @desc      Add Leader
// @route     POST /api/v1/leader/:leaderId
// @access    Public
exports.addLeaderById = (req, res, next) => {
  res.end(
    "Will add ths Leaders: " +
      req.body.name +
      " With details descriptions " +
      req.body.description
  );
}

// @desc      Update Leader by ID
// @route     GET /api/v1/leader/:leaderId
// @access    Public
exports.updateLeaderById = (req, res, next) => {
  Leader.findByIdAndUpdate(
    req.params.leaderId,
    {
      $set: req.body
    },
    { new: true }
  )
    .then(
      leader => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(leader);
      },
      err => next(err)
    )
    .catch(err => next(err));
}


// @desc      Delete Leader by ID
// @route     DELETE /api/v1/leader/:leaderId
// @access    Private [only for admin]
exports.deleteLeaderById = (req, res, next) => {
  Leader.findByIdAndDelete(req.params.leaderId)
    .then(
      leader => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(leader);
      },
      err => next(err)
    )
    .catch(err => next(err));
}