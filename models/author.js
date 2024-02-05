const BaseSQLModel = require("./base");

class AuthorModel extends BaseSQLModel {
    constructor() {
        super("author");
    };

    // Wait for findAll to fetch in (models/base.js), then return the authors (controllers/author.js)
    //! Get all authors
    async findAll() {
        const authors = await super.findAll();
        return authors;
    };
    // Wait for findById to fetch in (models/base.js), then return the author (controllers/author.js)
    //! Get author by id
    async findById(id) {
        const author = await super.findById(id);
        return author;
    }
};

module.exports = AuthorModel;
