

const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_PRODUCT_FILTER":

            let priceArr = action.payload.map((element) => {
                return element.price
            })

            let maxPrice = Math.max.apply(null, priceArr)


            //reduce method
            // let maxPrice = priceArr.reduce((initialVal,curVal)=> Math.max(initialVal , curVal),0)

            // let maxPrice = Math.max(...priceArr)
            // console.log(maxPrice)
            // 

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                search_fiter: { ...state.search_fiter, maxPrice: maxPrice, price: maxPrice }
            }

        // reducer method to set grid view 
        // case "SET_GRID_VIEW":
        //     return {
        //         ...state,
        //         grid_view: true
        //     }

        // case "SET_LIST_VIEW":
        //     return {
        //         ...state,
        //         grid_view: false
        //     }


        case "SORT_FILTER":

            return {
                ...state,
                sorted_value: action.payload
            }


        case "PRODUCT_SORT":

            let newSortData;
            const { filter_products } = state


            let tempSortData = [...filter_products]

            if (state.sorted_value === "lowest") {
                newSortData = tempSortData.sort((a, b) => {
                    return a.price - b.price
                })

            }

            if (state.sorted_value === "highest") {
                newSortData = tempSortData.sort((a, b) => {
                    return b.price - a.price
                })

            }

            if (state.sorted_value === "a-z") {
                newSortData = tempSortData.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })

            }

            if (state.sorted_value === "z-a") {
                newSortData = tempSortData.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })

            }
            return {
                ...state,
                filter_products: newSortData
            }




        case "SEARCH_FILTER":
            const { name, value } = action.payload

            return {
                ...state,
                search_fiter: {
                    ...state.search_fiter,
                    [name]: value
                }
            }


        case "SEARCH_SORT":
            let { all_products } = state
            let tempFilterSearch = [...all_products]
            const { text, category, company, price } = state.search_fiter
            if (text) {
                tempFilterSearch = tempFilterSearch.filter((element) => {
                    return element.name.toLowerCase().includes(text)
                })
            }

            if (category !== 'all') {
                tempFilterSearch = tempFilterSearch.filter((element) => {
                    return element.category.toLowerCase() === category.toLowerCase()
                })
            }

            if (company !== 'all') {
                tempFilterSearch = tempFilterSearch.filter((element) => {
                    return element.company.toLowerCase() === company.toLowerCase()
                })
            }
            if (price) {
                tempFilterSearch = tempFilterSearch.filter((element) => {
                    return element.price <= price
                })

            }


            return {
                ...state,
                filter_products: tempFilterSearch
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                search_fiter: {
                    text: "",
                    category: "all",
                    company: "all",
                    maxPrice:6000000,
                    price: 6000000,
                    minPrice: ''
                }
            }


        default:
            return state
    }
}

export default reducer
