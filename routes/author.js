const express = require('express');
const router = express.Router();
const authorControllerClass = require('../controllers/author');

const authorController = new authorControllerClass();

// Call controller to action in (controllers/author.js)
router.get('/', (req, res) => authorController.getAuthors(req, res));
router.get('/:id', (req, res) => authorController.getAuthorById(req, res));

module.exports = router;