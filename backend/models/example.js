// models/example.js

const db = require('../utils/db');

const incrementScore = async (userId, username) => {
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

module.exports = {
    incrementScore,
};