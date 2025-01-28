// db.js

require('dotenv').config();

const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Adjust this based on your needs
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    decimalNumbers: true // Ensure decimal numbers are returned as numbers, not strings
});

// Export the pool with utility methods
module.exports = {
    /**
     * Execute a SQL query.
     * @param {string} query - The SQL query to execute.
     * @returns {Promise} - A promise that resolves with the query results.
     */
    query: (query) => {
        return pool.query(query);
    },

    /**
     * Execute a SQL query with placeholders.
     * @param {string} query - The SQL query with placeholders.
     * @param {Array} variables - The values to replace the placeholders.
     * @returns {Promise} - A promise that resolves with the query results.
     */
    execute: (query, variables) => {
        return pool.execute(query, variables);
    },

    /**
     * Format a SQL query with placeholders.
     * @param {string} query - The SQL query with placeholders.
     * @param {Array} variables - The values to replace the placeholders.
     * @returns {string} - The formatted SQL query.
     */
    format: (query, variables) => {
        return mysql.format(query, variables);
    }
};