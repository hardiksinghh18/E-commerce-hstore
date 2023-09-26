import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useProductContext } from './productcontext'
import reducer from '../reducer/filterReducer'



const FilterContext = createContext()

const initialState={
  filter_products:[],
  all_products:[],
  // grid_view:true,
  sorted_value:'highest',
  search_fiter:{
    text:"",
    category:"all",
    company:"all",
   maxPrice:'',
    price:'',
    minPrice:''
  }
}

const FilterContextProvider = ({children}) => {
const[grid_view,setGrid_View]=useState(true)
  

const{products}=useProductContext()

const[state,dispatch]=useReducer(reducer,initialState)

useEffect(()=>{
  dispatch({type:"LOAD_PRODUCT_FILTER" , payload:products})
},[products])


const setGridView=()=>{
  // dispatch({type:"SET_GRID_VIEW"})
  setGrid_View(true)
  
}
const setListView=()=>{
  // dispatch({type:"SET_LIST_VIEW"})
  setGrid_View(false)
  
}


// sort function
const sorting =(e)=>{
  let selectValue=e.target.value
dispatch({type:"SORT_FILTER",payload:selectValue})
}


useEffect(()=>{

  dispatch({type:"SEARCH_SORT"})
  dispatch({type:"PRODUCT_SORT"})

},[state.sorted_value,state.search_fiter])


//clear filter

const clearFilters=()=>{
  dispatch({type:"CLEAR_FILTERS"})
}

// search filter   


const updateFilterValue=(e)=>{
let name = e.target.name
let value = e.target.value
 console.log(name , value)

dispatch({type:"SEARCH_FILTER",payload:{name,value}})

}

  return (
    <FilterContext.Provider value={{...state,grid_view,setGridView,setListView,sorting,updateFilterValue,clearFilters}}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext=()=>{

    return useContext(FilterContext)
}

export default FilterContextProvider
export {useFilterContext,FilterContext}
