import React from "react"
import { Link } from "react-router-dom"
import "../assets/scss/componentStyles/PropertyTile.scss"
import myImage from "../../public/images/temp.jpg"

const PropertyTile = props => {
  return (
    <div>
      <div className="tile-wrapper">
        <div className="tile-image-wrapper">
          <img src={myImage}/>
        </div>
        <div className="tile-desc-container">
          <div className="tile-desc-header">{props.propertyName}</div>
          <div className="tile-desc-address">{props.address}</div>
          <div className="tile-desc-details">Studio - {props.numberOfBedrooms}beds & {props.numberOfBathrooms} | ${props.price}</div>
        </div>   
      </div>
    </div>
  )
}



/**
 * const PropertyTile = props => {
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
          description } = props[0]
          
          return (
          <li><Link to={`/api/v1/properties/${id}`}>
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

 */
export default PropertyTile