const Model = require("./Model")

class Property extends Model {

  static get tableName() {
    return "properties"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["location", 
                  "price", 
                  "squft", 
                  "dateListed", 
                  "dateAvailable", 
                  "numberOfFloors", 
                  "numberOfBedrooms", 
                  "numberOfBathrooms"],
      properties: {
        userId: { type: "integer" },
        location: { type: "string" },
        price: { type: "integer" },
        squft: { type: "integer" },
        dateListed: { type: "string" },
        dateAvailable: { type: "string" },
        numberOfFloors: { type: "integer" },
        numberOfBedrooms: { type: "integer" },
        numberOfBathrooms: { type: "integer" }
      },
    }
  }

  static get relationMappings(){
    const { User } = require("./index.js")
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "properties.userId",
          to: "users.id",
        },
      },
    }
  }
}
module.exports = Property