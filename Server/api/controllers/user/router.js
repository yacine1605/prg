const express = require('express');
const userController = require('./controller');
const auth = require('../../../midddleware/auth');
const userRouter = express.Router();
const signSchema = require('../../../validators/register');
const userSchema = require('../../../validators/auth');
const validate = require('../../../validators/validate');

userRouter.post('/signup', validate(signSchema.Register), userController.signupUser);
userRouter.post('/login', validate(userSchema.Login), userController.loginUser);
userRouter.get('/info', auth, userController.getInfoUser);
module.exports = userRouter;
