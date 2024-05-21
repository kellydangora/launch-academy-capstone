/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("details", (table) => {
    table.bigIncrements("id")
    table.string("flooring")
    table.string("appliancesIncluded")
    table.string("interiorFeatures")
    table.string("exteriorFeatures")
    table.string("neighborhoodFeatures")
    table.string("communityFeatures")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("details")
};
