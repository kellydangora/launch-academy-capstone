import express from "express"
import { Image } from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection
//import cleanUserInput from "../../../services/cleanUserInput.js"

const imagesRouter = new express.Router()

imagesRouter.get("/:id", async (req,res) => {
  const imageId = req.params.id
  try {
    const image = await Image.query().findById(imageId)
    res.status(200).json({ image })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

imagesRouter.post("/", uploadImage.single("imageUrl"), async (req, res) => {
  try {
    const { body } = req
    let data
    if (!req.file) {
      data = {
        ...body,
        imageUrl: undefined,
      }
    } else {
      data = {
        ...body,
        imageUrl: req.file.location,
      }
    }
    const formInput = cleanUserInput(data)
    const newImageEntry = await Image.query().insertAndFetch(formInput)
    res.status(201).json({ image: newImageEntry })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default imagesRouter