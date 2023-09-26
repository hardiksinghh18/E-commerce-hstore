import React, { useEffect } from 'react';
import Home from './Home'
import About from './About'
import Products from './Products';
import Cart from './Cart';
import Contact from './Contact';

import SingleItem from './SingleItem';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Navbar';
import { AppProvider } from './context/productcontext';
import Footer from './components/Footer';
import FilterContextProvider from './context/filterContext';
import CartProvider from './context/cartContext';
import Wishlist from './Wishlist';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from './Profile';
import {  ToastContainer, alert } from 'react-custom-alert';


function App() {


  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.transition = "all ease 1s";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <>
      <Auth0Provider
        domain="dev-h3607gs0fufsrar5.us.auth0.com"
        clientId="g5L2Wk0c2GFOkCOBUgHVy5fEBDpa1pgb"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <AppProvider>
          <FilterContextProvider>
            <CartProvider>
              <BrowserRouter>
              <ToastContainer floatingTime={5000} />
                <Navbar />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/products' element={<Products />} />

                  <Route exact path='/contact' element={<Contact />} />
                  <Route exact path='/cart' element={<Cart />} />
                  <Route exact path='/profile' element={<Profile />} />
                  <Route exact path='/wishlist' element={<Wishlist />} />
                  <Route exact path='/singleitem/:id' element={<SingleItem />} />
                </Routes>
                <button className='topbutton btn btn-dark' onClick={(() => window.scrollTo(0, 0))}>&uarr; </button>
                <Footer />
              </BrowserRouter>
            </CartProvider>
          </FilterContextProvider>
        </AppProvider>
      </Auth0Provider>
    </>

  );
}

export default App;
