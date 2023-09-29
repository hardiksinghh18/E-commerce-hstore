import React from 'react'
import CardToggle from './CardToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartContext'


const CartItems = ({ amount, color, image, price, name, id }) => {
    const { removeItem, setDecrease, setIncrease } = useCartContext()


    return (

        <>
            <div className='cartItem'>
                <div className='items'>
                    <figure> <img src={image} alt={name} /></figure>
                    <div className="cartproductdetail">
                        <h5>{name && name.toUpperCase()}</h5>
                        <div className='flexitem'>
                            <div><div className='colorbox' style={{ backgroundColor: color }}></div></div>
                        </div>

                    </div>
                </div>

                <br />
                <div className='price'>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(price / 10)}</div>
                <br />
                <div className='flexColumn' style={{ gap: "2px" }}>

                    <div className='subtotal'>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(price * amount / 10)}</div>
                    <CardToggle amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />

                </div>
                <br />
                <div className='remove'><FaTrash onClick={() => removeItem(id)} /></div>
            </div>
            <hr />
        </>
    )
}

export default CartItems
