import React from 'react'
import './index.scss'

function ProductPreview({ data }) {
  const { title, img } = data
  return (
    <div className="ProductPreview">
      <div className="imgContainer">
        <img width={'80%'} src={img} alt={title} />
      </div>
      <div className="ProductPreview_Tiltle">
        <span>{title}</span>
      </div>
    </div>
  )
}

export default ProductPreview
