const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/db');
require('dotenv').config();

//routes

//app
const app = express();

//db
db();
