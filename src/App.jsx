import React, { useContext, useState } from 'react'
import "./app.css"
import ProductContext from './components/context/productsContext'
import Header from './components/header'
import Products from './components/products'

function useFilters() {
  
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
  return {filterProducts, setFilters}
}


function App() {
  const {product} = useContext(ProductContext)
  const { filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(product)

  return ( 
    
      <div className="App">
        <Header changeFilters={setFilters}></Header>
        <Products product={filteredProducts}></Products>
      </div>
     
  )
}

export default App
