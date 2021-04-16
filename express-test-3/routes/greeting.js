const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('greeting', { title: 'Greeting Page'});
});

router.get('/:name', (req, res) => {
  const name = req.params.name;
  res.send("You've entered the name: " + name);
});

module.exports = router;
