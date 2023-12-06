const con = require('../utils/db');

const getAllArticles = (req, res) => {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    })
};

const getArticleBySlug = (req, res) => {
    let query = `SELECT article.*, author.name AS author_name FROM article INNER JOIN author ON article.author_id = author.id WHERE article.slug="${req.params.slug}"`;
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        console.log(article)
        res.render('article', {article: result[0]
        });
    });
};

const getArticleByAuthor = (req,res) => {
    let query = `SELECT article.*, author.name AS author FROM article INNER JOIN author ON article.author_id = author.id WHERE author.id="${req.params.id}"`;
    let articles = []
    // Passes JS code from query into the query function
    con.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('author', {articles: articles, author: articles[0].author
        });
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticleByAuthor
}