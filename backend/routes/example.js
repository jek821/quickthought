// routes/exampleRoutes.js

const express = require('express');
const exampleController = require('../controllers/example');

const router = express.Router();

// POST /increment-score
router.post('/increment-score', exampleController.incrementScore);

module.exports = router;