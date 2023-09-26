import React from 'react'
import AddtoCartBtn from './AddtoCartBtn'
import { NavLink } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartContext'



const WishItems = (props) => {
    const{id,name,price,image}=props
    const{removeFavItem}=useCartContext()
    // console.log(name, price)
  return (
   <>
   
    <div className='wishItems'>
      <div>
        <figure><img src={image} alt={name} />
        </figure>
      </div>
      <div><h4>{name.toUpperCase()}</h4></div>
      <div><h4>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(price / 100)}</h4></div>
      <div>
      <NavLink to={`/singleitem/${id}`}><button className="btn">Shop Now</button></NavLink>
        {/* <AddtoCartBtn/> */}
        </div>
      <div className='remove'><FaTrash  onClick={()=>removeFavItem(id)}/></div>
    </div>
    <hr />
    </>
  )
}

export default WishItems
