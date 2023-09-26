import React from 'react'
import { useFilterContext } from '../context/filterContext'

const Filter = () => {

  const { all_products, search_fiter: { category, company, price, minPrice, maxPrice }, updateFilterValue ,clearFilters} = useFilterContext()
  // console.log(all_products)
  // console.log(price)
  // console.log(maxPrice)

  const getCategoryData = (data) => {
    let categoryName = data.map((element) => {
      return element.category
    })

    return categoryName = ["all", ...new Set(categoryName)]
  }

  const getCompanyData = (data) => {
    let companyName = data.map((element) => {
      return element.company
    })
    return companyName = ["all", ...new Set(companyName)]
  }

  const categoryData = getCategoryData(all_products)
  const companyData = getCompanyData(all_products)

  // console.log(categoryData)
  // console.log(companyData)


  return (
    <>
      <div className='filter '>

        <h3>FILTERS</h3>
        <hr />
        <div className='flexColumn'>
          <h4>CATEGORY</h4>
          <hr />
          <div className="category flexColumn">
            {categoryData && categoryData.map((element, index) => {
              return <button key={index} name='category' value={element} onClick={updateFilterValue}>{element.toUpperCase()}</button>
            })}
          </div>
        </div>
        <hr />
        <div className="company flexColumn">
          <h4>COMPANY</h4>
          <div className='category'>
            <form action="">
              <label htmlFor="sort"></label>
              <select name="company" id="company" className='sortmenu' onClick={updateFilterValue}>
                {companyData && companyData.map((company, index) => {
                  return <option key={index} value={company}   >{company.toUpperCase()}  </option>
                })}
              </select>
            </form>
          </div>
        </div>
        <hr />
        <div className="priceFilter flexColumn">
          <h3>Price</h3>
          <h4>{new Intl.NumberFormat('en-IN', { style: "currency", currency: "INR", maximumSignificantDigits: 2 }).format(price / 100)}</h4>

          <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} step={1} />
        </div>
        <hr />
        <div className="clearFilter flexColumn">
          <button className="btn" onClick={clearFilters}>CLEAR FILTERS</button>
        </div>
        
      </div>
    </>
  )
}

export default Filter
