import React, { useEffect, useState } from 'react'
import ShoppingCart from './shoppingCart'
import  products from "/src/style/products.css"
function Products() {
  
  const [product, setProduct] = useState([])

  useEffect(() => {
    productsRequest()
  }, [])
  
  async function productsRequest () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProduct(data)
}

  return (
    <div>
      <header>
        <ShoppingCart></ShoppingCart>
      </header>
      <div className='product-list-container'> 
        <ul className="product-list">
          {product.map(item => (
            <li key={item.id} className="card"> 
                <div className='product-header'>
                <h2 className='product-title'> {item.title} </h2> </div>
                <div className='img-container'>
                  <img src={item.image} alt="product img" className='product-img'></img>
                </div>
                <p className='product-price'> ${item.price} </p>
                <p> {item.category} </p>
                <button>carrito</button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products