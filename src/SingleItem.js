import React, { useEffect } from 'react'
import { Rating } from '@mui/material';
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/productcontext'
import Spinner from './components/Spinner';
import ProductImage from './components/ProductImage';
import AddtoCart from './components/AddtoCart';


const API = "https://api.pujakaitem.com/api/products";

export default function SingleItem() {
  const { getSingleProduct, isSingleLoading, singleProduct, isLoading } = useProductContext()

  // console.log(isSingleLoading,singleProduct)

  const { id } = useParams()

  const { category, company, description, colors, featured, image, name, price, reviews, stars, stock, } = singleProduct
  // console.log(name,category)
  // console.log(singleProduct)
  // console.log(stars)
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])





  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    )
  }


  // console.log(id)
  return (
    <>
   
      <div className='productDetails'>
        <h2>Product Details</h2>
      </div>

      <div className='flexitem productContainer'>
        <div className='productImage'><ProductImage imgs={image} /></div>
        <div className="productDescription">
          <h2>{name && name.toUpperCase()}</h2>
          <h5>Brand : {company}</h5>
          {stars&&<p className='rating'> <Rating name="read-only" value={stars} precision={0.2} readOnly />  <span>({stars})</span></p>}
          <p> ({reviews} Cutomer Reviews)</p>
          <h5 className='oldPrice'>MRP<del>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 2 }).format(price / 10 + 15000)}</del></h5>
          <a className='DOTD' href="/">DEAL OF THE DAY :{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(price / 10)}</a>
          <p className='descriptionpara'>{description}</p>
          <div className="flexitem icons">
            <div className='flexColumn'><i className="ri-truck-fill"></i><p>Fast Delivery</p></div>
            <div className='flexColumn'><i className="ri-recycle-fill"></i><p>14 Days Return</p></div>
            <div className='flexColumn'><i className="ri-24-hours-line"></i><p>Customer Support</p></div>
            <div className='flexColumn'><i className="ri-shield-star-fill"></i><p>1 Year Warranty</p></div>
          </div>
          

          <hr />

         <div >
        {stock>0 &&  <AddtoCart  singleProduct={singleProduct}/>}
         </div>
          
        </div>

      </div >
    </>
  )
}
