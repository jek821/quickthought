// models/example.js

const db = require('../utils/db');

class ExampleModel {
    /**
     * Increment a user's score by 1, but only if the userId and username match.
     * @param {number} userId - The ID of the user.
     * @param {string} username - The username of the user.
     * @returns {Promise<number>} - The updated score.
     * @throws {Error} - If the userId and username do not match.
     */
    static async incrementScore(userId, username) {
        // Verify that the userId and username match
        const [user] = await db.execute('SELECT id FROM users WHERE id = ? AND username = ?', [userId, username]);

        if (user.length === 0) {
            throw new Error('User not found or username does not match the user ID.');
        }

        // Increment the score
        const updateQuery = `
            UPDATE users
            SET score = score + 1
            WHERE id = ? AND username = ?
        `;
        await db.execute(updateQuery, [userId, username]);

        // Fetch and return the updated score
        const [rows] = await db.execute('SELECT score FROM users WHERE id = ?', [userId]);
        return rows[0].score;
    }
}

module.exports = {
    ExampleModel
};