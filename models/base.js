const conn = require('../utils/db')

class BaseSQLModel {
    constructor(tableName) {
        this.tableName = tableName
    };

    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            conn.query(query, params, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                };
            });
        });
    };

    //! find all articles and return them to (models/articles.js)
    async findAll() {
        const query = `SELECT * FROM ${this.tableName}`;
        const results = await this.executeQuery(query);
        return results;
    };

    //! find by id and return it to (models/articles.js)
    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const results = await this.executeQuery(query, [id]);
        return results[0];
    };

    //! find one article and return it to (models/articles.js)
    async findOne(where, value) {
        const query = `SELECT * FROM ${this.tableName} WHERE ${where}="${value}"`;
        const results = await this.executeQuery(query, [where, value]);
        return results[0];
    };

    //! find many articles and return them to (models/articles.js)
    async findMany(where, value) {
        const query = `SELECT * FROM ${this.tableName} WHERE ${where}="${value}"`;
        const results = await this.executeQuery(query, [where, value]);
        return results;
    }
    //! create a new article and return the id to (models/articles.js)
    async create(data) {
        const query = `INSERT INTO ${this.tableName} SET ?`;
        const result = await this.executeQuery(query, data);
        return result.insertId;
    };
    //! update an article and return the affected rows to (models/articles.js)
    async update(id, data) {
        const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
        const result = await this.executeQuery(query, [data, id]);
        return result.affectedRows;
    };
    //! delete an article and return the affected rows to (models/articles.js)
    async delete(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
        const result = await this.executeQuery(query, [id]);
        return result.affectedRows;
    };
};

module.exports = BaseSQLModel