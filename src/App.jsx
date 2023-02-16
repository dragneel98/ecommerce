import React, { useState } from 'react'
import app from "./app.css"
import Products from './components/products'
import {product} from './components/products'

function App() {
  const [product] = useState(initialState)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "0"
  })
  function filterProducts() {
    
  }
  return (
    <div className="App">
     <Products></Products>
    </div>
  )
}

export default App
