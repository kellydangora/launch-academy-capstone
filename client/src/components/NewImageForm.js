import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"
//import ErrorList from "./ErrorList.js"
import Dropzone from "react-dropzone"

const NewImageForm = ({ property, setProperty }) => {
  const [newImage, setNewImage] = useState({ name: "", imageUrl: {} })

  const handleInputChange = event => {
    setNewImage({
      ...newImage,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newImageBody = new FormData()
    newImageBody.append("name", newImage.name)
    newImageBody.append("propertyId", property.id)
    newImageBody.append("imageUrl", newImage.imageUrl)
    postImage(newImageBody)
    setNewImage({
      name: "",
      imageUrl: {}
    })
  }

  const handleImageUpload = (acceptedImage) => {
    setNewImage({
      ...newImage,
      imageUrl: acceptedImage[0]
    })
  }

  const postImage = async (newImageData) => {
    try {
      const response = await fetch(`/api/v1/images`, {
        method: "POST",
        headers: new Headers({
          "Accept": "image/jpeg",
        }),
        body: newImageData
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const body = await response.json()
        const newImageEntry = body.image
        setProperty({ ...property, images: property.images.concat(newImageEntry)})
        setErrors([])
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
    <h1>Add Images</h1>
    <form onSubmit={handleSubmit} className="new-image-form">
      <label>
        Name of Room or Feature:
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={newImage.name}
          className="form-input"
        />
      </label>
      <Dropzone onDrop={handleImageUpload}>
        {({getRootProps, getInputProps}) => (
          <section className="drag-and-drop">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Upload New Proporty Image Here - drag and drop or click to upload</p>
            </div>
          </section>
        )}
      </Dropzone>
      <input type="submit" className="submit-form-button" />
    </form>
  </div>
  )
}
export default NewImageForm

// seed 1-2 properties 
// make a relationmapping from properties to images
// read the second article on file uploading in the cloud with multer and AWS. See your group project for good example
  // make an images router
  // add multer and aws 
  // add an image uploader
  // sign up to amazon s3 and configure a bucket -> need to acquire amazon AWS key and secret key
  // edit the config files 
  // add multer to your imagesRouter endpoint that you are posting to
  // get the imageUrl from params that you can persist with your image name in the images table