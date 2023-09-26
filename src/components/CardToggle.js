import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CardToggle = (props) => {
const{setDecrease,setIncrease,amount}=props
  return (
    <div>
      <div className="incdec">
       
        <h4 onClick={() => setDecrease()}><FaMinus /></h4>
        <h4>{amount}</h4>
        <h4 onClick={() => setIncrease()}><FaPlus /></h4>
        
      </div>


    </div>
  )
}

export default CardToggle
