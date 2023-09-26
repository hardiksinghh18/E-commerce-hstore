import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import AddtoCartBtn from './AddtoCartBtn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListView = (props) => {
    const { filter_products } = props
    const{inWishlist}=useCartContext()
    // console.log(filter_products)
const{addToWishlist}=useCartContext()

const alertSuccess = () => toast('Successful  !! Item added to your Wishlist');
    return (
        <>
            <div className="listView">
                
                {filter_products && filter_products.map((element) => {
                    return <div key={element.id} className=' listSection '>
                        <figure>
                            <NavLink to={`/singleitem/${element.id}`} >
                                <img src={element.image} alt={element.name} />
                            </NavLink>
                        </figure>
                        <div className='listDetails'>
                            <div className="heading"><h2>{element.name.toUpperCase()}</h2>  <span onClick={alertSuccess}><i className="ri-heart-fill iconStyle"  onClick={()=>addToWishlist(element.id,element.price,element.image,element.name)}></i></span></div>
                            <div>
                                <h4>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 2 }).format(element.price / 100)}</h4>
                                <p>{element.description.slice(0, 240)}...</p>
                                <div className="listButtons ">
                                    {/* <NavLink to={"/cart"}>
                                        <button onClick={() => addtoCart(id, selectedColor, amount, singleProduct)} className='btn'>Add to Cart</button>
                                    </NavLink> */}
                                   
                                    <NavLink to={`/singleitem/${element.id}`}><button className="btn">Shop Now</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
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

export default ListView
