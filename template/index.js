import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

// apps
var app = express();

//static file serving
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



//routers
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

// mount routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;

