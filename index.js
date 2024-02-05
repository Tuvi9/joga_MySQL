const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//! When user goes to /, route to main page (routes/articles.js)
const articleRoutes = require('./routes/articles');
app.use('/', articleRoutes);
app.use('/article', articleRoutes);
//! When user goes to /author, route to author page (routes/author.js)
const authorRoutes = require('./routes/author');
app.use('/author', authorRoutes);

//! Start the server
app.listen(3000, () => {
    console.log('localhost:3000')
});

// // add application packages
// const express = require('express');
// const app = express();

// const path = require('path');

// // add template engine
// const hbs = require('express-handlebars');
// // May or may not be properly written.
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// app.engine('hbs', hbs.engine({
//     extname: 'hbs',
//     defaultLayout: 'main',
//     layoutsDir: __dirname + '/views/layouts',
// }));
// app.use(express.static('public'));



// const articleRoutes = require('./routes/article')
// app.use('/', articleRoutes);
// app.use('/article', articleRoutes)
// app.use('/author', articleRoutes)

// // app start point
// app.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
/*
// show all articles - index page
app.get('/', (req, res) => {
    let query = "SELECT * FROM article"
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('index', {articles: articles})
    })
});

// show article author by slug
app.get('/article/:slug', (req, res) => {
    let query = `SELECT article.*, author.name AS author_name FROM article INNER JOIN author ON article.author_id = author.id WHERE article.slug="${req.params.slug}"`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.render('article', {article: result[0]});
    });
});

// show articles by author
app.get('/author/:id', (req, res) => {
    let query = `SELECT article.*, author.name AS author FROM article INNER JOIN author ON article.author_id = author.id WHERE author.id="${req.params.id}"`;
    let articles = []
    // Passes JS code from query into the query function
    con.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('author', {articles: articles, author: articles[0].author});
    })
});
*/