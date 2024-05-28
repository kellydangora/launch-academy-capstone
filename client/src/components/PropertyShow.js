import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ErrorList from "./layout/ErrorList.js"
import translateServerErrors from "../services/translateServerErrors"
import NewImageForm from "./NewImageForm"
import ImageList from "./ImageList"

const PropertyShow = (props) => {
  const [property, setProperty] = useState({ details: [], images: [] })
  
  const [errors, setErrors] = useState([])
  const params = useParams()
  const propertyId = params.id
  const getProperty = async () => {
    try {
      const response = await fetch(`api/v1/properties/${propertyId}`)
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setProperty(responseBody.property)
    } catch (err) {
      console.error(err)
    }
  }

  const postProperty = async (newPropertyData) => {
    newPropertyData.userId = props.user.id
    try {
      const response = await fetch(`/api/v1/properties/${propertyId}/images`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
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
    }
    const responseBody = await response.json()
    const newImage = responseBody.image
    setProperty({ ...property, images: [...property.images, newImage]})
    setErrors([])
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`)
  }
}
  
  useEffect(() => {
      getProperty()
    }, [])

    return (
      <div className="property-show">
        <h1>{property.imageUrl}</h1>
        <h4>{property.userId}</h4>
        <h5>{property.location}</h5>
        <ImageList user={props.user} />
        
          <NewImageForm property={property} postProperty={postProperty} setProperty={setProperty} />
          <ErrorList errors={errors} />
      </div>
    )
  }


  export default PropertyShow