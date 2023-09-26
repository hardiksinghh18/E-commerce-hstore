import React from 'react'
import { useState } from 'react'
import CardToggle from './CardToggle'
import AddtoCartBtn from './AddtoCartBtn'



const AddtoCart = ({ singleProduct }) => {


    const { colors, stock, id } = singleProduct
    // console.log(colors)
    const [selectedColor, setSelectedColor] = useState(colors && colors[0])





    const [amount, setAmount] = useState(1)

    const setDecrease = (() => {
        return amount > 1 ? setAmount(amount - 1) : setAmount(1)
    })

    const setIncrease = (() => {
        return amount < stock ? setAmount(amount + 1) : setAmount(stock)
    })
    return (
        <div className='addtocartmain'>
            <div>
                <h4 className='stock'>AVAILABLE : {stock > 0 ? "IN STOCK" : "OUT OF STOCK"} ({stock})</h4>
                <h3 className='colorPallete'> Color : {colors && colors.map((curColor, index) => {
                    return (
                        <button key={index} style={{ backgroundColor: curColor }} className={selectedColor === curColor ? 'activeColor' : ''} onClick={() => setSelectedColor(curColor)} ></button>)
                })}
                </h3>
            </div>
            <div className='addtocart'>

                <h3>Quantity : </h3>
                <CardToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
                <AddtoCartBtn amount={amount} singleProduct={singleProduct} selectedColor={selectedColor} id={id} />
            </div>


        </div>
    )
}

export default AddtoCart
