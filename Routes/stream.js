const express=require('express');
const router=express.Router();
const controller=require('../Controllers/streamController')

router.route('/')
.get(controller.handleStream)
.post(controller.handleStream)

module.exports=router