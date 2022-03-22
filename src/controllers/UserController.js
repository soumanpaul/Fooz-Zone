var User = require("../models/users");
var passport = require("passport");
var authenticate = require("../middleware/authenticate");

// @desc      Get all Users
// @route     GET /api/v1/users
// @access    Private [only allowed to admin]
exports.getUsers = (req, res, next) => {
  User.find({})
    .then(users => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(users);
    })
    .catch(err => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.json({ err: err });
    });
};

// @desc      Signup for New Users
// @route     POST /api/v1/users/singup
// @access    Private [only allowed to admin]
exports.signUp = (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        if (req.body.firstname) user.firstname = req.body.firstname;
        if (req.body.lastname) user.lastname = req.body.lastname;
        if (req.body.admin) user.admin = req.body.admin;

        user.save((err, user) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ err: err });
            return;
          }
          passport.authenticate("local")(req, res, () => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({ success: true, status: "Registration Successful!" });
          });
        });
      }
    }
  );
};

// @desc      Signin for users
// @route     POST /api/v1/users/login
// @access    Private
exports.signIn = (req, res, next) => {
  console.log("signin..");
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: false, status: "Login Unsccessful!", err: info });
    }
    req.logIn(user, err => {
      if (err) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: false,
          status: "Login Unsccessful!",
          err: "Couldnt Login user!"
        });
      }

      var token = authenticate.getToken({ _id: req.user._id });
      const options = {
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        httpOnly: true
      };

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res
        .cookie("token", token, options)
        .json({ success: true, status: "Login sccessful!", token: token });
    });
  })(req, res, next);
};

// @desc      Logout
// @route     GET /api/v1/users/logout
// @access    Private [only allowed to admin]
exports.logOut = (req, res) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
};

exports.facebookToken = (req, res) => {
  if (req.user) {
    var token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      token: token,
      status: "You are successfully logged in!"
    });
  }
};

exports.checkToken = (req, res) => {
  passport.authenticate("jwt", { session: false }, (err, user, next) => {
    if (err) return next(err);

    if (!user) {
      res.statusCode = 401;
      res.setHeader("Content-Type", "application/json");
      res.json({ status: "JWT invalid!", success: false, err: info });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({ status: "JWT valid!", success: true, user: user });
    }
  })(req, res);
};
