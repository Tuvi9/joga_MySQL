const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');

const articleController = new articleControllerClass();

// If on / route, call getAllArticles function from (controllers/article.js)
router.get('/', (req, res) => articleController.getAllArticles(req, res));

module.exports = router;