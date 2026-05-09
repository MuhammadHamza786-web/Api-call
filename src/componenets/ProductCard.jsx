

import React from 'react'

const ProductCard = ({ title, images, price, category }) => {
  // const eachproducts = props.eachproducts
  return (
    <div className="main">

    <div className="front">

      <img src={images} alt="images" />
      <h1>{title}</h1>
      {/* <p>{description}</p>  */}
      <div className='priceCategory'>
      <b>{price}</b>
      <h6>{category}</h6>

      </div>
      <button className='cartBtn'>Add To Cart</button>
    </div>
    </div>
  )
}

export default ProductCard;






































































