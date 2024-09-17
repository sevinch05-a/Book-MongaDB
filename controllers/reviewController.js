const Review = require('../models/reviewModel');

// Create a new review
const createReview = async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get reviews for a specific book
const getBookReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ book: req.params.bookId }).populate('user book');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createReview, getBookReviews };