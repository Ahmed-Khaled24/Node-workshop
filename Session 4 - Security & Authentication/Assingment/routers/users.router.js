const express = require('express');
const { addNewUser } = require('../controllers/users.controller');

const usersRouter = express.Router();


usersRouter.post('/', addNewUser);


module.exports = usersRouter;