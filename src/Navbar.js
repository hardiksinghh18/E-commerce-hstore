import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { useFilterContext } from './context/filterContext';
import { useCartContext } from './context/cartContext';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { search_fiter: { text }, updateFilterValue } = useFilterContext()
  const { totalItem,wishlist } = useCartContext()

  const [toggle, setToggle] = useState(false)

  const toggleMenuOpen = () => {
    setToggle(true)
  }
  const toggleMenuClose = () => {
    setToggle(false)
  }



  return (
    <nav className="navbar flexitem" id='navbar' >
      <div className="navbarleft flexitem">
        <NavLink to="/" className="logo">
          <h1>.hstore</h1>
        </NavLink>
      </div>

      <div className="right">
        <div className="search-box">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <span className="searchicon"><i className="ri-search-line"></i></span>
            <input type="text" name='text' value={text} onChange={updateFilterValue} placeholder="Search for products" className="input" />
            {/* <button type="submit" className="submit">Search</button> */}
          </form>
        </div>
      </div>
      <div onClick={toggleMenuClose}>
        <ul className={toggle ? "flexitem  navbar-links-show navbar-links " : "flexitem  navbar-links"} >


          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/">Home</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/products">Products</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/about">About</NavLink></li>
          <li className='nav-item'><NavLink className='nav-links' activeclassname="active" to="/contact">Contact Us</NavLink></li>

          {
            isAuthenticated ? (
            <>
                <li className=''><NavLink className='nav-links nav-item flexitem' activeclassname="active" to="/profile" ><i className="ri-account-circle-line iconStyle"></i><p className='username'>{user?user.name.toUpperCase():''}</p></NavLink></li>
                <li className='nav-item cart'><NavLink className='nav-links' activeclassname="active" to="/wishlist"><i className="ri-heart-line iconStyle"></i><span className='totalItems'>{wishlist.length}</span></NavLink></li>
                <li className='nav-item cart'><NavLink className='nav-links' activeclassname="active" to="/cart"><i className="ri-shopping-cart-line iconStyle"></i><span className='totalItems'>{totalItem}</span></NavLink></li>
          
              </>
            ) : (
              <li><button className="btn" onClick={() => loginWithRedirect()}>Log In</button></li>
            )
          }

        </ul>



      </div>
      <div className='responsiveMenu'>
        <FaBars className={toggle ? 'barMenuHide' : 'barMenuShow'} onClick={toggleMenuOpen} />
        <FaTimes className={toggle ? 'closeMenuShow' : 'closeMenuHide'} onClick={toggleMenuClose} />
      </div>
    </nav>
  )
}
