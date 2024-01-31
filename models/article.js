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
}
module.exports = ArticleModel;