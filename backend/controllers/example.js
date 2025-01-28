const exampleModel = require('../models/example');

/**
 * Increment a user's score by 1.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const incrementScore = async (req, res, next) => {
    try {
        // Extract userId and username from the request body
        const { userId, username } = req.body;

        // Validate required fields
        if (!userId || !username) {
            return res.status(400).json({ error: 'userId and username are required' });
        }

        // Call the model method to increment the score
        const updatedScore = await exampleModel.incrementScore(userId, username);

        // Return the updated score in the response
        res.status(200).json({ score: updatedScore });
    } catch (error) {
        // Pass the error to the error-handling middleware
        next(error);
    }
};

module.exports = {
    incrementScore,
};