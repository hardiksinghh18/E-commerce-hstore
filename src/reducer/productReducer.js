const reducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,

            }
        case "SET_API_DATA":
            const featuredData = action.payload.filter((element) => {
                return element.featured === true
            })

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featuredData
            }


        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true

            }

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,

            }
        case "SET_SINGLE_DATA":


            return {
                ...state,
                isLoading: false,
                singleProduct: action.payload,
            }

        case "SINGLE_DATA_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true

            }

        default:
            return state
    }

}


export default reducer