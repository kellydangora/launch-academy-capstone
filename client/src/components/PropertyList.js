import React, { useState, useEffect } from "react"
import PropertyTile from "./PropertyTile.js"
import NewPropertyForm from "./NewPropertyForm.js"

const PropertyList = (props) => {
  const [properties, setProperties] = useState([])
  const getPropertiesData = async () => {
    try {
      const response = await fetch("/api/v1/properties")
      if (!response.ok) {
        const newError = new Error("Error in the fetch!")
        throw newError
      }
      const responseBody = await response.json()
      setProperties(responseBody.properties)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPropertiesData()
  }, [])
  
  const propertyTileComponents = properties.map((property) => {
    return (
      <PropertyTile
        key={property.id}
        {...property}
      />
    )
  })

  return (
    <div>
      <h2>Features</h2>
      {propertyTileComponents}
    {props.user ? <NewPropertyForm setProperties={setProperties} /> : null}
    </div>
  )
}
export default PropertyList