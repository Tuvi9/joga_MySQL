// add application packages
const express = require('express');
const app = express();

const path = require('path');

// add template engine
const hbs = require('express-handlebars');
// May or may not be properly written.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'));

const mysql = require('mysql');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// create database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_mysql"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to joga_mysql.');
})

// show all articles - index page
app.get('/', (req, res) => {
    let query = "SELECT * FROM article"
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        console.log(articles);
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

// app start point
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});