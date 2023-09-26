import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = (props) => {
    const {image,name,price,id}=props
    // console.log(price)
  return (
    <NavLink to={`/singleitem/${id}`}>
      <div className="Featurecard">
        <div>
            {/* <h3 className='cardcategory'>{category.toUpperCase()}</h3> */}
            <img src={image} alt={name} />
        </div>

        <div className="description flexitem">
          <span>{name.toUpperCase()}</span>
          <span>{new Intl.NumberFormat('en-IN', {style:"currency",currency:"INR", maximumSignificantDigits: 3 }).format(price/100)}</span>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
