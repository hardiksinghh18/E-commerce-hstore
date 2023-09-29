import React from 'react'
import { NavLink } from 'react-router-dom'
const HeroSection = () => {
    return (
        <>


            <section  class="banner" >
                <div class="banner-content">
                    <h1>Welcome to  .hstore</h1>
                    <p>Discover the latest and greatest in electronics!</p>
                    <NavLink to={"/products"} ><button class="ShopButton">Shop Now</button></NavLink>
                </div>
            </section >

        </>
    )
}

export default HeroSection
