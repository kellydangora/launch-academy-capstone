import React from "react"
import { Link } from "react-router-dom"

const PropertyTile = props => {
  const { id, 
          location, 
          price, 
          yearBuilt, 
          squft, 
          dateListed, 
          dateAvailable, 
          numberOfUnits, 
          numberOfFloors, 
          numberOfBedrooms, 
          numberOfBathrooms,
          heating,
          cooling,
          laundry,
          parking,
          realEstateCompany,
          description } = props.property
          
          return (
          <li><Link to={`/property/${id}`}>
            Address: {location}
            Price: ${price}
            Built in: {yearBuilt}
            Squft: {squft}
            Date Listed: {dateListed}
            Date Available: {dateAvailable}
            Units: {numberOfUnits}
            Floors: {numberOfFloors}
            Bedrooms: {numberOfBedrooms}
            Bathrooms: {numberOfBathrooms}
            Heating: {heating}
            Cooling: {cooling}
            Laundry: {laundry}
            Parking: {parking}
            Agent: {realEstateCompany}
            Description: {description}
            </Link></li>
  )
}
export default PropertyTile