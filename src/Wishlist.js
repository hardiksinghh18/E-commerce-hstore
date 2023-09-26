import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from './context/cartContext'
import WishItems from './components/WishItems'
const Wishlist = () => {

  const { wishlist,clearWishlist } = useCartContext()
  // console.log(wishlist)


  if (wishlist.length === 0) {
    return (

      <div div className='flexColumn emptycart' >
        <h1>Your Wishlist  is Empty !</h1>
        <p>Add items to display them here.</p>

        <NavLink to={"/products"} className="btn">Continue Shopping</NavLink>
      </div >
    )
  }
  return (
    <div className='flexColumn'>
      <h2>Your Wishlist</h2>
      <hr />
      <div>
        {wishlist.map((element) => {
          return <WishItems {...element} />
        })}
      </div>
      <div className="cartButtons flexitem">
          <NavLink to={"/products"} className="btn">Continue Shopping</NavLink>
          <button onClick={clearWishlist}  className="btn2">Clear WishList</button>
        </div>
    </div>



  )
}

export default Wishlist
