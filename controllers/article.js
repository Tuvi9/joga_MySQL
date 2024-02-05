const articleDbModel = require('../models/article')
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = [];
    };

    // Wait for getAllArticles in (models/article.js) to finish, then send the response back to (routes/article.js)
    async getAllArticles(req, res){
        const articles = await articleModel.findAll()
        res.status(201).json({articles:articles})
    };

    // Wait for getArticleBySlug in (models/article.js) to finish, then send the response back to (routes/article.js)
    async getArticleBySlug(req, res){
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article:article})
    };

    // Wait for createNewArticle in (models/article.js) to finish, then send the response back to (routes/article.js)
    async createNewArticle(req, res){
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        };
        const articleId = await articleModel.create(newArticle)
        res.status(201).json({
            message: `created article with id ${articleId}`,
            article: {id: articleId, ...newArticle}
        });
    };

    // Wait for editArticle in (models/article.js) to finish, then send the response back to (routes/article.js)
    //! Updates the article with the id from the request
    async editArticle(req, res){
        const articleId = req.params.id
        const updatedArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        };
        const affectedRows = await articleModel.update(articleId, updatedArticle)
        res.status(201).json({
            message: `updated article with id ${articleId}`,
            article: {id: articleId, ...updatedArticle}
        });
    };
};


module.exports = articleController

// const con = require('../utils/db');

// const getAllArticles = (req, res) => {
//     let query = "SELECT * FROM article";
//     let articles = []
//     con.query(query, (err, result) => {
//         if (err) throw err;
//         articles = result
//         res.render('index', {
//             articles: articles
//         })
//     })
// };

// const getArticleBySlug = (req, res) => {
//     let query = `SELECT article.*, author.name AS author_name FROM article INNER JOIN author ON article.author_id = author.id WHERE article.slug="${req.params.slug}"`;
//     let article
//     con.query(query, (err, result) => {
//         if (err) throw err;
//         console.log(article)
//         res.render('article', {article: result[0]
//         });
//     });
// };

// const getArticleByAuthor = (req,res) => {
//     let query = `SELECT article.*, author.name AS author FROM article INNER JOIN author ON article.author_id = author.id WHERE author.id="${req.params.id}"`;
//     let articles = []
//     // Passes JS code from query into the query function
//     con.query(query, [req.params.id], (err, result) => {
//         if (err) throw err;
//         articles = result;
//         res.render('author', {articles: articles, author: articles[0].author
//         });
//     })
// }

// module.exports = {
//     getAllArticles,
//     getArticleBySlug,
//     getArticleByAuthor