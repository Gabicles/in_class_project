const express = require('express');
const router = express.Router();

// Handle GET requests to '/'
router.get('/', function(req, res, next) {
  // Render the 'index' template with title set to 'BookedIn'
  res.render('index', { title: 'BookedIn' });
});

module.exports = router;

