import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../context/cartContext'


const AddtoCartBtn = (props) => {
    const { isAuthenticated } = useAuth0();
    const { addtoCart } = useCartContext()
    const { amount, singleProduct,selectedColor,id } = props
   
    const alertSuccess = () => toast('Successful  !! Item added to your Cart');
    return (
        <>
            <div to={"/cart"} onClick={() => addtoCart(id, selectedColor, amount, singleProduct)} >
                <button disabled={!isAuthenticated} onClick={alertSuccess} className='btn'>Add to Cart</button>
            </div>

            <ToastContainer
                backgroundColor="#333"
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default AddtoCartBtn
