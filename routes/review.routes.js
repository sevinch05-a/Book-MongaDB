const express = require('express');
const router = express.Router();
const { createReview, getBookReviews } = require('../controllers/reviewController');

router.post('/reviews', createReview);
router.get('/reviews/book/:bookId', getBookReviews);

module.exports = router;