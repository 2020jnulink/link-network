

const ShopPeer = require('../blockchain/shopPeer');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => { 
    console.log('http://localhost:3001/api/');
    res.send({title: '운동하고싶다'})
});

  router.post('/shop', (req, res) => {
   // res.render('shop-main', { shopActive: true });
   console.log(req.body);
   //res.redirect('/');
  });
  
  


module.exports = router;

