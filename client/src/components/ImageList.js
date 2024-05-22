import React from "react"
import ImageTile from "./ImageTile"

const ImageList = ({ images, user, setProperty, property }) => {
  const imageListItems = images.map(image => {
    return (
      <ImageTile image={image} key={image.id} user={user} property={property} setProperty={setProperty} />
    )
  })

  return (
    <>
      {imageListItems}
    </>
  )
}
export default ImageList