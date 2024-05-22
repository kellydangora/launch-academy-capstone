import React, { useState } from "react"
//import translateServerErrors from "../../services/translateServerErrors.js"
import ErrorList from "./layout/ErrorList.js"

const NewPropertyForm = () => {
  const [newProperty, setNewProperty] = useState({ location: "", price: "" })
  const [errors, setErrors] = useState([])

  const handleInputChange = (event) => {
    setNewProperty({
      ...newProperty,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postProperty(newProperty)
    setNewProperty({
      location: "",
      price: ""
    })
  }

  const postProperty = async (newPropertyData) => {
    try {
      const response = await fetch(`/api/v1/properties`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application.json",
        }),
        body: JSON.stringify(newPropertyData)
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
        const newPropertyEntry = body.property
        setProperties([...properties, newPropertyEntry])
        setErrors([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h4>List your home here:</h4>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <label>Location:
          <input 
            className="form-input"
            type="text" 
            name="location" 
            onChange={handleInputChange} 
            value={newProperty.location}
          />
        </label>
        <label>Price:
          <input
            className="form-input"
            type="text"
            name="price"
            onChange={handleInputChange}
            value={newProperty.price}
          />
          </label>
        <input type="submit" className="submit-form-button" />
      </form>
    </div>
  )
}
export default NewPropertyForm

