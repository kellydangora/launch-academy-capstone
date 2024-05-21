const Model = require("./Model")

class Image extends Model {

  static get tableName() {
    return "images"
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["imagesOfExterior",
                 "imagesOfBathrooms",
                 "imagesOfBedrooms",
                 "imagesOfLivingRoom",
                 "imagesOfKitchen"],
      images: {
        imagesOfExteriorHome: { type: "string" },
        imagesOfBathrooms: { type: "string" },
        imagesOfBedrooms: { type: "string" },
        imagesOfLivingRoom: { type: "string" },
        imagesOfKitchen: { type: "string" },
        imagesOfDiningArea: { type: "string" },
        imagesOfFlooring: { type: "string" },
        imagesOfBasement: { type: "string" },
        imagesOfBackyard: { type: "string" },
        imagesOfAppliances: { type: "string" },
        imagesOfParking: { type: "string" },
        imagesOfDeckPatio: { type: "string" }
      }
    }
  }
  
  static get relationMappings(){
    const { Property, Detail } = require("./index.js")
      return {
        property: {
          relation: Model.BelongsToOneRelation,
          modelClass: Property,
          join: {
            from: "images.propertyId",
            to: "properties.id"
          }
        },
        detail: {
          relation: Model.BelongsToOneRelation,
          modelClass: Detail,
          join: {
            from: "images.detailId",
            to: "details.id"
        }
      }
    }
  }
}
module.exports = Image