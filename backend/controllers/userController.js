const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//@desc auth user and get token
//Route POST /api/users/login
//access public
