/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("properties", (table) => {
    table.bigIncrements("id")
    table.bigInteger("userId").unsigned().notNullable().index().references("users.id")
    table.string("location").notNullable()
    table.integer("price").notNullable()
    table.integer("yearBuilt")
    table.integer("squft").notNullable()
    table.string("dateListed").notNullable()
    table.string("dateAvailable").notNullable()
    table.integer("numberOfUnits")
    table.integer("numberOfFloors").notNullable()
    table.integer("numberOfBedrooms").notNullable()
    table.integer("numberOfBathrooms").notNullable()
    table.string("heating")
    table.string("cooling")
    table.string("laundry")
    table.string("parking")
    table.string("realEstateCompany")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("properties")
};
