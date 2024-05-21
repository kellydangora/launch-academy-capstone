/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("images", (table) => {
    table.bigIncrements("id")
    table.string("imagesOfExterior").notNullable()
    table.string("imagesOfBathrooms").notNullable()
    table.string("imagesOfBedrooms").notNullable()
    table.string("imagesOfLivingRoom").notNullable()
    table.string("imagesOfKitchen").notNullable()
    table.string("imagesOfDiningArea")
    table.string("imagesOfFlooring")
    table.string("imagesOfBasement")
    table.string("imagesOfBackyard")
    table.string("imagesOfAppliances")
    table.string("imagesOfParking")
    table.string("imagesOfDeckPatio")
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
