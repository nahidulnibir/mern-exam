const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/db');
require('dotenv').config();

//routes
const authRoutes = require('./routes/auth');

//db
db();

//app
const app = express();

//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//route middleware
app.use('/api/users', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  );
});
