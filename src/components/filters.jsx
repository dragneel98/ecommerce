import React, { useState } from 'react'
import "/src/style/filters.css"

function Filters() {

    const [minPrice, setMinPrice] = useState(0)
    const minPriceActualValue = (event) => {
        setMinPrice(event.target.value)
    }
  return (
    <section className='filters'>
    <div className='filter filter-price'>
        <label htmlFor='category'>min price </label>
        <input type="range" id='price' min= "0" max="1000" onChange={minPriceActualValue}></input>
        <span> {minPrice} </span>
    </div>
    <div className='filter filter-category'>
        <label htmlFor='category'> category </label>
        <select>
            <option value="all"> all </option>
            <option value="electronics"> electronics </option>
            <option value="men's clothing"> men's clothing </option>
        </select>
    </div>
    </section>
  )
}

export default Filters