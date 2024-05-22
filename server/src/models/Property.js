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
        "numberOfBathrooms"
      ],
      properties: {
        userId: { type: "integer" },
        location: { type: "string" },
        price: { type: "integer" },
        yearBuilt: { type: "integer" },
        squft: { type: "integer" },
        dateListed: { type: "string" },
        dateAvailable: { type: "string" },
        numberOfUnites: { type: "integer" },
        numberOfFloors: { type: "integer" },
        numberOfBedrooms: { type: "integer" },
        numberOfBathrooms: { type: "integer" },
        heating: { type: "string" },
        cooling: { type: "string" },
        laundry: { type: "string" },
        parking: { type: "string" },
        realEstateCompany: { type: "string" }
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
        }
      },
    }
  }
}
module.exports = Property