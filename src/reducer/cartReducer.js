

const cartReducer = (state, action) => {




    if (action.type === "ADD_TO_CART") {
        let { id, selectedColor, amount, singleProduct } = action.payload
        // console.log(singleProduct,selectedColor)

        let existingProduct = state.cart.find((element) => {
            return element.id === id + selectedColor
        })

        // console.log()
        if (existingProduct) {
            let updatedCart = state.cart.map((element) => {
                if (element.id === id + selectedColor) {
                    let newAmount = element.amount + amount

                    if (newAmount >= element.max) {
                        newAmount = element.max
                    }
                    return {
                        ...element,
                        amount: newAmount
                    }
                }
                else return element
            })

            return {
                ...state,
                cart: updatedCart

            }
        }
        else {
            let cartData = {
                amount: amount,
                id: id + selectedColor,
                color: selectedColor,
                name: singleProduct.name,
                price: singleProduct.price,
                image: singleProduct.image[0].url,
                max: singleProduct.stock
            }

            return {
                ...state,
                cart: [...state.cart, cartData]

            }
        }


    }

    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter((element) => {
            return element.id !== action.payload
        })

        return {
            ...state,
            cart: updateCart
        }
    }
    if (action.type === "CLEAR_CART") {

        return {
            ...state,
            cart: []
        }
    }


    if (action.type === "DECREASE") {
        let updatedCart = state.cart.map((element) => {
            if (element.id === action.payload) {
                let newAmount = element.amount - 1
                if (newAmount <= 1) {
                    newAmount = 1
                }
                return {
                    ...element,
                    amount: newAmount
                }
            }
            else {
                return element
            }
        })

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === "INCREASE") {
        let updatedCart = state.cart.map((element) => {
            if (element.id === action.payload) {
                let newAmount = element.amount + 1
                if (newAmount >= element.max) {
                    newAmount = element.max
                }
                return {
                    ...element,
                    amount: newAmount
                }
            }
            else {
                return element
            }
        })

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === "CART_ITEMS") {
        let totalItems = state.cart.reduce((initialVal, element) => {
            return initialVal + (element.amount)
        }, 0)

        return {
            ...state,
            totalItem: totalItems
        }
    }

    if (action.type === "TOTAL_COST") {
        let cost = state.cart.reduce((initialVal, element) => {
            return initialVal + (element.price) * (element.amount)
        }, 0)

        return {
            ...state,
            totalCost: cost
        }
    }


    if (action.type === "ADD_TO_WISHLIST") {
        const { id, price, image, name } = action.payload

        let itemPresent = state.wishlist.find((element) => {
            return element.id === id
        })

        if (itemPresent) {
           
            return {
                ...state,
                wishlist: [...state.wishlist],
                inWishlist: true
            }
        }


        let wishlistItems = {
            id, price, image, name
        }

        return {
            ...state,
            wishlist: [...state.wishlist, wishlistItems]
        }
    }


    if (action.type === "REMOVE_FAV_ITEM") {
        let updateWishList = state.wishlist.filter((element) => {
            return element.id !== action.payload
        })

        return {
            ...state,
            wishlist: updateWishList
        }
    }


    if(action.type==="CLEAR_WISHLIST"){

        return{
            ...state,
            wishlist:[]
        }
    }
    return state
}

export default cartReducer
