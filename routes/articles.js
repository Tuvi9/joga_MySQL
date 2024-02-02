const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');

const articleController = new articleControllerClass();

// Call controller to action in (controllers/article.js)
router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/:slug', (req, res) => articleController.getArticleBySlug(req, res));

module.exports = router;