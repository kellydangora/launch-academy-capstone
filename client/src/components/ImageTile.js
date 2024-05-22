import React from "react"
import { Link } from "react-router-dom"

const ImageTile = ({ id, name, imageUrl }) => {
  return (
    <Link to={`/properties/${id}/images`}>
      <div className="">
        <img src={imageUrl} className="property-list-image"></img>
          <p>{name}</p>
      </div>
    </Link>
  )
}
export default ImageTile