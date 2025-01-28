/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('example', (table) => {
        table.increments('id').primary(); // Auto-incrementing primary key
        table.string('username').notNullable().unique(); // Unique username
        table.integer('score').notNullable().defaultTo(0); // Score, defaulting to 0
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
