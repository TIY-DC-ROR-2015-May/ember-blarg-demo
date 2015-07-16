var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var u = require('underscore');
var moment = require('moment');

var cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors())

var posts = [
  {id: 1, title: "First Post!", author: 1, body: "Tlljndflkajsndkfjnsdf", date: new Date(2015, 1, 1, 12, 34)},
  {id: 2, title: "A second thing", author: 2, body: "kajsndfjaekljfwek jalskdjflaksjnf lakjenfl kjanelkfj nakf", date: new Date(2015, 04, 08, 15, 00)},
  {id: 3, title: "Kyle's First Blog Post", author: 3, body: "Uhhh ... krc2f72264mashthekeyboard", date: new Date(2015, 07, 04, 20, 00)}
]

var authors = [
  {id: 1, name: "Katie Walsh"},
  {id: 2, name: "Su Kim"},
  {id: 3, name: "Kylf"}
]

app.get("/posts", function(req, res) {
  res.json({
    posts: posts
  })
})

app.get("/posts/:id", function(req, res, next) {
  var post = u.find(posts, function(p) {
    return p.id == req.params.id
  })
  if (!post) { return next() }

  res.json({
    post: post
  })
})

app.put("/posts/:id", function(req, res, next) {
  new_post = req.body.post
  new_post.id = req.params.id

  posts[req.params.id - 1] = new_post

  res.json({
    post: new_post
  })
})

app.get("/authors/:id", function(req, res, next) {
  var author = u.find(authors, function(a) {
    return a.id == req.params.id
  })

  if (!author) { return next() }

  res.json({
    author: author
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
