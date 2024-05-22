import React, { useState } from "react"
import translateServerErrors from "../../services/translateServerErrors.js"
import ErrorList from "./ErrorList.js"
import Dropzone from "react-dropzone"

const NewImageForm = ({ postImage }) => {
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
        setImages([...images, newImageEntry])
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