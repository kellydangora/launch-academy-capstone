const Model = require("./Model")

class Image extends Model {

  static get tableName() {
    return "images"
  }
  static get jsonSchema() {
    return {
      type: "object",
       required: ["propertyId","name","imageUrl"],
      images: {
        propertyId: { type: "integer" },
        name: { type: "string" },
        category: { type: "string" },
        imageUrl: { type: "string" }
      }
    }
  }
  
  static get relationMappings(){
    const { Property } = require("./index.js")
      return {
        property: {
          relation: Model.BelongsToOneRelation,
          modelClass: Property,
          join: {
            from: "images.propertyId",
            to: "properties.id"
          }
        }
      }
    }
  }
module.exports = Image