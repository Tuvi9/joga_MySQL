const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');

const articleController = new articleControllerClass();

// Call controller to action in (controllers/article.js)
//! Get all articles
router.get('/', (req, res) => articleController.getAllArticles(req, res));
//! Get article by slug
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));
//! Creates a new article
router.post('/article/create', (req, res) => articleController.createNewArticle(req, res));
//! Updates the article with the id from the request
router.patch('/article/edit/:id', (req, res) => articleController.editArticle(req, res));
//! Deletes the article with the id from the request
router.delete('/article/delete/:id', (req, res) => articleController.deleteArticle(req, res));

module.exports = router;