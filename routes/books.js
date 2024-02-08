const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = [
    { title: 'The Expanse', author: 'James S. A. Corey' },
    { title: 'Expeditionary Force', author: 'Craig Alanson' },
    { title: 'The Three-Body Problem', author: 'Cixin Liu' }
  ];
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

module.exports = router;
