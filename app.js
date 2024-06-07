const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');

const authRouter = require('./app/api/auth/router');
const filmRouter = require('./app/api/films/router');

const app = express();
const apiVersion = '/api/v1';

app.use(cors());
app.use(helmet());
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 10,
	standardHeaders: true,
	legacyHeaders: false,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${apiVersion}/auth`, limiter, authRouter);
app.use(`${apiVersion}/film`, limiter, filmRouter);

module.exports = app;
