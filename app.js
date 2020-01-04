var createError = require('http-errors');
var express = require('express');
var path = require('path');
const colors = require('colors');
var logger = require('morgan');
const cookieParser = require('cookie-parser')
var passport = require('passport');
const connectDB = require('./config/db');


// Route files
var indexRouter = require('./routes/index.routes');
var usersRouter = require('./routes/users.routes');
var dishRouter = require('./routes/dish.routes');
var promoRouter = require('./routes/promo.routes');
var leaderRouter = require('./routes/leader.routes');
var uploadRouter = require('./routes/upload.routes');
var favorateRouter = require('./routes/favorites.routes');
var commentRouter = require('./routes/comment.routes');


var app = express();

connectDB();
// app.all('*', (req, res, next) => {
//   if (req.secure) {
//     return next();
//   }
//   else {
//     res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
//   }
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(passport.initialize());


//Mount routers
app.use('/api/v1/index', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/dishes', dishRouter);
app.use('/api/v1/promotions', promoRouter);
app.use('/api/v1/leaders', leaderRouter);
app.use('/api/v1/imageUpload', uploadRouter);
app.use('/api/v1/favorites', favorateRouter)
app.use('/api/v1/comments', commentRouter);



// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
