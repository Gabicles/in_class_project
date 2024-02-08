const express = require('express');
const app = express();
const port = 3000;
var handlebars = require('express-handlebars').create();

// Configure Handlebars as the view engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Require the routers
const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books'); // Require the new books router

// Use the routers
app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter); // Use the books router for requests to /books

// GET home page
app.use('/', function(req, res, next) {
  res.send("<h1>Hello BookedIn</h1>");
});

// Custom 404 page
app.use((req, res) => {
  res.status(404);
  res.send('<h1>404 - Not Found</h1>');
});

// Custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`
));
