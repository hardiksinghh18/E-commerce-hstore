import React from 'react'
import Product from './Product'

const GridView = (props) => {

    const {filter_products}=props
    // console.log(filter_products)
  return (
    <>
      <div className="productDisplay">
        {filter_products&&filter_products.map((element)=>{
            return <Product key={element.id} {...element} />
        })}
      </div>
    </>
  )
}

export default GridView
