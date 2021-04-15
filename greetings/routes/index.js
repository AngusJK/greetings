var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Greetings' });
});

router.post('/greeting', (req, res) => {
  const templateVars = {
    name: req.params.name
  }
  res.render('greeting', templateVars);
});

module.exports = router;
