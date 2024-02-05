const authorDbModel = require('../models/author');
const articleDbModel = require('../models/article');

const authorModel = new authorDbModel();
const articleModel = new articleDbModel();

class authorController {
    constructor() {
        const authors = []
    };

    // Wait for getAuthors in (models/author.js) to finish, then send the response back to (routes/author.js)
    async getAuthors(req, res) {
        const authors = await authorModel.findAll()
        res.status(201).json({authors: authors})
    };

    // Wait for getAuthorById in (models/author.js) to finish, then send the response back to (routes/author.js)
    async getAuthorById(req, res) {
        const author = await authorModel.findById(req.params.id)
        const articles = await articleModel.findMany('author_id', req.params.id)
        author['articles'] = articles
        res.status(201).json({author: author})
    };
};

module.exports = authorController;