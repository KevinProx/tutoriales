const express = require('express');
const router = express.Router();

async function home(req, res) {
  vars.title = "Tutorial Selectores";

  res.render('index', vars);
}

/* GET home page. */
router.get('/', home);

module.exports = router;
