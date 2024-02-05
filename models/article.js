const BaseSQLModel = require('./base');

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article');
    };

    // Wait for findAll to fetch in (models/base.js), then return the articles (controllers/article.js)
    async findAll() {
        const articles = await super.findAll();
        return articles
    };

    // Wait for findOne to fetch in (models/base.js), then return the article (controllers/article.js)
    async findOne(slug) {
        const article = await super.findOne('slug', slug);
        return article
    };

    async findMany(where, value) {
        const articles = await super.findMany(where, value);
        return articles
    };

    async create(article) {
        const createdArticleId = await super.create(article);
        return createdArticleId
    };

    async update(id, article) {
        const affectedRows = await super.update(id, article);
        return affectedRows
    };
}
module.exports = ArticleModel;