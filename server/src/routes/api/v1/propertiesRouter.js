import express from "express"
import { Property } from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection
//import cleanUserInput from "../../../services/cleanUserInput.js"

const propertiesRouter = new express.Router()

propertiesRouter.get("/", async (req, res) => {
  try {
    const properties = await Property.query()
    res.status(200).json({ properties: properties })
  } catch (err) {
    console.log(err)
    res.status(500).json({ errors: err })
  }
})


propertiesRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const property = await Property.query().findById(id)
    return res.status(200).json({ property })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})








export default propertiesRouter