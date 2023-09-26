import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducer/cartReducer'


const CartContext = createContext()

const getLocalData = () => {
    let localCartData = localStorage.getItem("cartData")
    // if (localCartData.length === 0) {
    //     return []
    // }
    // else {
    //     return JSON.parse(localCartData)
    // }

    const  parsedData=JSON.parse(localCartData)
    if(!Array.isArray(parsedData)) return []
    else return parsedData
}

const getWishlistData=()=>{
    let wishListData=localStorage.getItem('wishlistData')
    // if (wishListData.length === 0) {
    //     return []
    // }
    // else {
    //     return JSON.parse(wishListData)
    // }

    
    const  parsedData=JSON.parse(wishListData)
    if(!Array.isArray(parsedData)) return []
    else return parsedData
}
const initialState = {
    // cart: [],
    cart: getLocalData(),
    totalItem: '',
    totalCost: '',
    shippingFee: 10000,
    wishlist:getWishlistData(),
    inWishlist:false
}
const CartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState)

    const addtoCart = (id, selectedColor, amount, singleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, selectedColor, amount, singleProduct } })

    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    useEffect(() => {

        dispatch({ type: "CART_ITEMS" })
        dispatch({ type: "TOTAL_COST" })
        localStorage.setItem("cartData", JSON.stringify(state.cart))
    
    }, [state.cart])

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }


    // increase decrease cart amount 

    const setDecrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }
    const setIncrease = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }


    const addToWishlist=(id,price,image,name)=>{
// console.log(id,price,image,name)
dispatch({type:"ADD_TO_WISHLIST",payload:{id,price,image,name}})
// console.log(state.wishlist)
localStorage.setItem("wishlistData", JSON.stringify(state.wishlist))
    }
    const removeFavItem=(id)=>{
dispatch({type:"REMOVE_FAV_ITEM",payload:id})
    }


    const clearWishlist=()=>{
dispatch({type:"CLEAR_WISHLIST"})
    }

    return (
        <CartContext.Provider value={{ ...state, addtoCart, removeItem, clearCart, setDecrease, setIncrease,addToWishlist,removeFavItem,clearWishlist }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export default CartProvider
export { useCartContext }
