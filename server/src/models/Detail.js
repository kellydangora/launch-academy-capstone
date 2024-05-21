const Model = require("./Model")

class Detail extends Model {

  static get tableName() {
    return "details"
  }
  static get jsonSchema() {
    return {
      type: "object",
      details: {
        flooring: { type: "string" },
        appliancesIncluded: { type: "string" },
        interiorFeatures: { type: "string" },
        exteriorFeatures: { type: "string" },
        neighborhoodFeatures: { type: "string" },
        communityFeatures: { type: "string" }
      }
    }
  }

  static get relationMappings(){
    const { Property, Image } = require("./index.js")
    return {
      property: {
        relation: Model.BelongsToOneRelation,
        modelClass: Property,
        join: {
          from: "details.propertyId",
          to: "properties.id"
        }
      },
      image: {
        relation: Model.BelongsToOneRelation,
        modelClass: Image,
        join: {
          from: "details.imageId",
          to: "images.id"
        }
      }
    }
  }
}
module.exports = Detail