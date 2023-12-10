const express=require('express');
const { home, about, camera, contact } = require('../controller/front.controller');

//router instance
const router=express.Router();

router.get('/',home);
router.get('/about',about)
router.get('/camera',camera)
router.get('/contact',contact)

module.exports=router