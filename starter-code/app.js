const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const mainRoute = require('./routes/main.route');
const celebritiesRoute = require('./routes/celebrities.route');
const moviesRoute = require('./routes/movies.route');

// Import DB config
require('./config/db.config');

const app = express();

// view engine setup
app.use(expressLayout);
app.set('layout', 'layout');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', mainRoute);
app.use('/celebrities', celebritiesRoute);
app.use('/movies', moviesRoute);
//app.use('/', (_, res) => res.redirect('/celebrities'));

module.exports = app;
