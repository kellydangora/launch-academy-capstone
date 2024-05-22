import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors"
import NewImageForm from "./NewImageForm"

const PropertyShow = (props) => {
  const [property, setProperty] = useState({ location: "", details: [], images: [] })
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
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const postProperty = async (newPropertyData) => {
    newPropertyData.userId = props.user.id
    try {
      const response = await fetch(`/api/v1/properties/${propertyId}/details`, {
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
    const newDetail= responseBody.detail
    setProperty({ ...property, details: [...property.details, newDetail]})
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
        <h1>{property.location}</h1>
        <h4>{property.price}</h4>
        
          <NewImageForm property={property} setProperty={setProperty}/>
      </div>
    )
    }




  export default PropertyShow