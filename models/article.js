const BaseSQLModel = require('./base');

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article');
    };

    // Wait for findAll to fetch in (models/base.js), then return the articles (controllers/article.js)
    //! Get all articles
    async findAll() {
        const articles = await super.findAll();
        return articles
    };

    // Wait for findOne to fetch in (models/base.js), then return the article (controllers/article.js)
    //! Get article by slug
    async findOne(slug) {
        const article = await super.findOne('slug', slug);
        return article
    };
    // Wait for findMany to fetch in (models/base.js), then return the articles (controllers/article.js)
    //! Get article by slug
    async findMany(where, value) {
        const articles = await super.findMany(where, value);
        return articles
    };
    // Wait for create to fetch in (models/base.js), then return the created article id (controllers/article.js)
    //! Creates a new article
    async create(article) {
        const createdArticleId = await super.create(article);
        return createdArticleId
    };
    // Wait for update to fetch in (models/base.js), then return the affected rows (controllers/article.js)
    //! Updates the article with the id from the request
    async update(id, article) {
        const affectedRows = await super.update(id, article);
        return affectedRows
    };
    // Wait for delete to fetch in (models/base.js), then return the affected rows (controllers/article.js)
    //! Deletes the article with the id from the request
    async delete(id) {
        const affectedRows = await super.delete(id);
        return affectedRows
    };
}
module.exports = ArticleModel;