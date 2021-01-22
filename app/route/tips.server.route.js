const tips= require('../controller/tips.server.controller');
const auth= require('../middleware/auth');
const express= require('express');
const router= express.Router();


	
  router.post('/addTips',auth, tips.addTips );
 
  router.get("/getTips", tips.getTips);

  module.exports= router;

//got the solution