import React from 'react'
import CardToggle from './CardToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartContext'


const CartItems = ({ amount, color, image, price, name,id }) => {
const{removeItem,setDecrease,setIncrease}=useCartContext()

    
    return (

        <>
        <div className='cartItem '>
            <div className='items'>
               <figure> <img src={image} alt={name} /></figure>
                <div className="cartproductdetail">
                    <h5>{name&&name.toUpperCase()}</h5>
                    <div className='flexitem'>
                     <div><p>Color:</p></div>
                     <div><p className='colorbox' style={{backgroundColor:color}}></p></div>
                    </div>
          
                </div>
            </div>
            <div className='price'>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(price / 10)}</div>

            <CardToggle amount={amount} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)}/>

            <div className='subtotal'>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(price*amount / 10)}</div>
            <div className='remove'><FaTrash  onClick={()=>removeItem(id)}/></div>
        </div>
        <hr />
        </>
    )
}

export default CartItems
