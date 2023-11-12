var express = require('express');
var router = express.Router();
var register = require('../models/register')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adddata',async function (req, res, next) {
  try {
    console.log(req.body);
    var data = await register.create(req.body)
    res.status(201).json({
      status:"sucess"
    })

  } catch (err) {
        console.log(err);
        res.status(201).json({
          status:"sucess"
        })
  } 
});

module.exports = router;
