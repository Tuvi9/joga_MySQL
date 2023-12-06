const express = require('express');

// get using express router
const router = express.Router();

// define article controller and export it for this file
const articleController = require('../controllers/article');

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticleBySlug)
router.get('/author/:id', articleController.getArticleByAuthor)

module.exports = router;