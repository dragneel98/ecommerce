import React, { useContext, useState } from 'react'
import "./app.css"
import ProductContext from './components/context/productsContext'
import Header from './components/header'
import Products from './components/products'


function App() {

  const {product} = useContext(ProductContext)
  
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
