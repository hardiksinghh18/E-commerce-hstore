import React from 'react'

import Filter from './components/Filter'
import Sort from './components/Sort'
import ProductDisplay from './components/ProductDisplay'

export default function Products() {
 
  return (
    <>
    <div className="productSection">
      <div className="filterSection">
        <Filter/>
        </div>
      <div className="mainProductsection flexrow">
        <div className="sortSection">
          <Sort/>
          </div>
        <div >
          <ProductDisplay/>
        </div>
      </div>
    </div>
       
    </>
  )
}
