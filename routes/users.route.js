const express = require('express');
const { route } = require('../app');
const router = express.Router();


router.get('/api',(req,res)=>{
    res.send('route work')
})




module.exports= router;