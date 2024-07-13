import React, { useState, useEffect } from "react"
import PropertyTile from "./PropertyTile.js"
import NewPropertyForm from "./NewPropertyForm.js"
import "../assets/scss/componentStyles/PropertyList.scss"



const testList = [
  {
    propertyName: "Village Solars",
    address: "420 State Street",
    numberOfBedrooms: 3,
    numberOfBathrooms: 2,
    price: 60000,
  },
  {
    propertyName: "Evergreen Pointe",
    address: "31 Spooner St",
    numberOfBedrooms: 10,
    numberOfBathrooms: 5,
    price: 150000,
  },
  {
    propertyName: "Villa Florida",
    address: "301 East Main Avenue",
    numberOfBedrooms: 2,
    numberOfBathrooms: 2,
    price: 105000,
  },
  {
    propertyName: "Silver Gray Redbud",
    address: "311 College Avenue",
    numberOfBedrooms: 8,
    numberOfBathrooms: 4,
    price: 200000,
    name: "gus"
  },





]
const PropertyList = props => {
  const [properties, setProperties] = useState([]);

  const getPropertiesData = async() => {
    try {
      const response = await fetch('/api/v1/properties/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log("properties in useEffect: ",properties);

      setProperties(result.properties)


    }catch(err) {
      console.log(err)

    }
  };

  useEffect(() => {
    console.log("properties: ", properties)
    getPropertiesData();

  }, []);

  return (
    <div>
      <div className="list-name">Explore properties in our Marketplace</div>
      <div className="list-container">
        {testList.map((item) => {
          return <PropertyTile 
          propertyName={item.propertyName}
          address={item.address}
          numberOfBathrooms={item.numberOfBathrooms}
          numberOfBedrooms={item.numberOfBedrooms}
          price={item.price}
           />
        })}
      </div>
      <button className="list-btn">View More</button>
      
      
    </div>
  )
  
  


}
/**
 * 
 * {properties.map((property) => {
        <PropertyTile
        key={property.id}
        {...property}
      />

      })}


const PropertyList = (props) => {
  const [properties, setProperties] = useState([])
  const getPropertiesData = async () => {
    try {
      const response = await fetch("/api/v1/properties")
      if (!response.ok) {
        const newError = new Error("Error in the fetch!")
        throw newError
      }
      
      console.log(response);
      const responseBody = await response.json()
      setProperties(responseBody.properties)

    } catch (err) {
      console.log(err)
    }
  }

 
  useEffect(() => {
    getPropertiesData()
  });


  
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
 */
export default PropertyList