const express = require('express');
const router= express.Router();
const usersRouter= require('./user');
const productsRouter= require('./product');
const authRouter = require('./auth')
const registerRouter=require('./register');
const authMiddleware= require('../middleware/authorization')

router.use('/users',usersRouter);
router.use('/products',productsRouter);
router.use('/auth',authRouter);
router.use('/register',registerRouter);

router.use(authMiddleware);
module.exports=router;