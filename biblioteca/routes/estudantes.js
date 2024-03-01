var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('vc esta na barra estudantes');
});

router.get('/exercicios', function(req, res, next) {
  res.send('muito legal, os exercicios ');
});

router.get('/provas', function(req, res, next) {
  res.send('muito legal, as provas');
});

router.get('/notas', function(req, res, next) {
  res.send('muito legal, as notas');
});

module.exports = router;
