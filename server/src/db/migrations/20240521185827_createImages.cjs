/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("images", (table) => {
    table.bigIncrements("id")
    table.bigInteger("propertyId").unsigned().notNullable().index().references("properties.id")
    table.string("name").notNullable()
    table.string("category")
    table.string("imageUrl").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("images")
};
