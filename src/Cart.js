import React from 'react'
import { useCartContext } from './context/cartContext'
import CartItems from './components/CartItems'
import { NavLink } from 'react-router-dom'


export default function Cart() {

  const { cart, clearCart, totalCost, shippingFee } = useCartContext()
  // console.log(cart)

  if (cart.length === 0) {
    return (
      <div className='flexColumn emptycart'>
        <h1>Your Shopping Cart is Empty !</h1>
        <p>Add items to display them here.</p>

        <NavLink to={"/products"} className="btn">Continue Shopping</NavLink>
      </div>
    )
  }
  return (
    <>
      <div className="cartsection">
        <div className="cartHeading flexitem">
          <div> <h4 className='itemsheading'>ITEMS</h4></div>
          <div> <h4>PRICE</h4></div>
          <div> <h4>QUANTITY</h4></div>
          <div> <h4>SUBTOTAL</h4></div>
          <div> <h4>REMOVE</h4></div>
        </div>
        <hr />
        {cart && cart.map((element, index) => {
          return <CartItems key={index} {...element} />

        })}

        <div className="cartButtons flexitem">
          <NavLink to={"/products"} className="btn">Continue Shopping</NavLink>
          <button onClick={clearCart}  className="btn2">Clear Cart</button>
        </div>

        <div className="pricebox">

          <div className="totalPrice">
            <div className='flexitem'><span>Total Price :</span><h5>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 4 }).format(totalCost / 10)}</h5></div>
            <div div className='flexitem'><span>Shipping Fee : </span><h5>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(shippingFee / 10)}</h5></div>
            <hr />
            <div className='flexitem'><span>Order Total : </span><h5>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 4 }).format((totalCost / 10) + 1000)}</h5></div>
          </div>
          

        </div>
        <div className='placeOrder'>
          
        <button className="btn">Place Order</button>
         </div>
      </div>
        
    </>
  )
}
