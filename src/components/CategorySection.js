import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFilterContext } from '../context/filterContext'

const CategorySection = () => {
    const { category, all_products, updateFilterValue } = useFilterContext()
    console.log(category)


    const hardik = () => {
        console.log("hardik")
    }
    return (
        <div className='categorySection'>
            <div className='categoryHeading'>
                <h2>Categories </h2>
            </div>
            <div className="flexitem  card-section">
                <div className="cards"   >

                    <NavLink to={"/products"}><button className="card-text" name='category' value='mobile' onClick={updateFilterValue}  >Mobiles <i className="ri-arrow-right-line"></i></button></NavLink>
                </div>

                <div className='cards'  >
                    <NavLink to={"/products"}><button className="card-text" name='category' value='laptop' onClick={updateFilterValue}>Laptops <i className="ri-arrow-right-line"></i></button></NavLink>

                </div>

                <div to={"/products"} className="cards">

                    <NavLink to={"/products"}>  <button className="card-text" name='category' value='computer' onClick={updateFilterValue}>PC <i className="ri-arrow-right-line"></i></button></NavLink>
                </div>
                <div to={"/products"} className="cards">
                    <NavLink to={"/products"}> <button className="card-text" name='category' value='watch' onClick={updateFilterValue}>Watches <i className="ri-arrow-right-line"></i></button></NavLink>

                </div>
                <div to={"/products"} className="cards">
                    <NavLink to={"/products"}> <button className="card-text" name='category' value='accessories' onClick={updateFilterValue}>Accessories <i className="ri-arrow-right-line"></i></button></NavLink>

                </div>

            </div>

        </div>
    )
}

export default CategorySection
