import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutTop = () => {
  return (
    <div>
               <div className="flexitem heroSection">
                <div className="hero-section-data">
                    <p className="intro-data">Welcome to </p>
                    <h1> .hstore </h1>
                    <p>At .hstore, we are passionate about bringing you the latest and greatest electronic devices and accessories. With a team of tech enthusiasts, we strive to provide you with high-quality products and exceptional customer service.</p>

                    <div className='shopnow'>
                        <NavLink className="btn" to={"/products"}>show now <i className='ri-arrow-right-line'></i></NavLink>
                    </div>
                </div>
                {/* our homepage image  */}
                <div className="hero-section-image">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="mainImg"
                            className="img-style"
                        />
                    </figure>
                </div>
            </div >
    </div>
  )
}

export default AboutTop
