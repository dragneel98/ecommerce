import React, { useState } from 'react'
import app from "./app.css"
import Filters from './components/filters'
import Products from './components/products'


function App() {
  const [product] = useState(initialState)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "0"
  })
  function filterProducts(product) {
    return product.filter(product => {
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(product)

  return (
    <div className="App">
     <Header></Header>
     <Products product={filteredProducts}></Products>
    </div>
  )
}

export default App
