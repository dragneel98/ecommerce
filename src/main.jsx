import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './components/context/filtersContext'
import { ProductProvider } from './components/context/productsContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    
     
      <ProductProvider>
        
          <App />
        
      </ProductProvider>
    
  ,
)
