import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/filterContext'

const Sort = () => {
  const { grid_view, filter_products, setGridView, setListView,sorting } = useFilterContext()

  // const[view,setView]=useState(grid_view)


  return (
    <>
      <div className="sort flexitem">
        <div className="sortIcons">
          <button onClick={setGridView} className={grid_view ? 'gridIcon iconActive' : 'gridIcon'}><BsFillGridFill /></button>
          <button onClick={setListView} className={grid_view ? 'listIcon ' : 'listIcon iconActive'}><BsList /></button>
        </div>
        <div className="totalProducts">{filter_products.length} Total Products </div>
        <div className="sortAtoZ">
          
          <form action="">
            <label htmlFor="sort"></label>
          <select name="sort" id="sort" className='sortmenu' onClick={sorting}>
            <option value="lowest">Price(Low to High)</option>
            <option value="highest">Price(High to Low)</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
          </form>
        </div>
      </div>
    </> 
  )
}

export default Sort
