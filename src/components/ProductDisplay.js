import React from 'react'
import { useProductContext } from '../context/productcontext'
import Spinner from './Spinner'
import { useFilterContext } from '../context/filterContext'
import ListView from './ListView'
import GridView from './GridView'


const ProductDisplay = () => {
  const {  isLoading } = useProductContext()
  // console.log(products)

  const { grid_view, filter_products } = useFilterContext()

  // console.log(filter_products)

  

  if (isLoading) {
    return <><Spinner /></>
  }

  if (grid_view===true) {
    return (

      <div>
        <GridView filter_products={filter_products} />
      </div>

    )
  }
  if(grid_view===false){
    return (
      <div>
        <ListView filter_products={filter_products} />
      </div>
    )
  }

 
}

export default ProductDisplay
