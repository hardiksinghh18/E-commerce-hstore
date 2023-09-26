import React from 'react'
import {useProductContext} from '../context/productcontext'
import Product from './Product'
import Spinner from './Spinner'

const FeatureSection = () => {
    const {isLoading,featuredProducts}=useProductContext()

    // console.log(featuredProducts)

    if(isLoading){
        return <>
        <Spinner />
        </>
    }
    
  return (
   
    <>
      <div className='featuredProducts'>
      <div className='featureHeading'><h2 >Top Featured Products</h2></div> 
        <div className='featureSection flexitem'>
            {featuredProducts.map((element)=>{
                 return (
                    <Product key={element.id} {...element}></Product>
                 )
            })}
        </div>
      </div>
    </>
  )
}

export default FeatureSection
