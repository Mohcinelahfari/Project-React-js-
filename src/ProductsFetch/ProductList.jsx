import React from 'react'
import { useEffect, useState } from 'react';
import ProductTable from './ProductTable';
import SearchInput from './SearchInput';
import { Alert } from 'bootstrap';

function ProductList() {
    
  const [products, setProducts] = useState([])
  const [searchinput, setSearchInput] = useState('')
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products').then(res => {
      return res.json()
    }).then((res) => (
      setProducts(res)
    ))
  }
  useEffect(() => {
    getProducts()
},[])

const handelsubmit = (e) => {
    e.preventDefault();
    const SearchValue = document.querySelector('#inputField').value
    setSearchInput(SearchValue)
}
  const displayData = () => {
    const ProductList = products.filter(product => {
        return product.id.toString().includes(searchinput) || product.title.includes(searchinput) || product.description.includes(searchinput) 
    })
    if(ProductList.length > 0){


        return ProductList.map((product) =>(
            <ProductTable  product={product}/>
       ))
    }
    
  }

  return (
    <div>

<div className="container mt-5">
<h1>Product List :</h1>
  <form className=''>
    <div class="mb-3 ">
      <label for="inputField" class="form-label">Enter Text:</label>
      <input type="text" class="form-control" id="inputField" placeholder="Type something" />
    </div>
    <button type="submit" class="btn btn-primary" onClick={handelsubmit}>Submit</button>
  </form>
      <h2 className="text-center">Bootstrap Table Example</h2>
      <table className="table table-striped table-bordered">
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Image</th>
          </tr>
        </thead>
      </table>
      {displayData()}
    </div>

    </div>
  )
}

export default ProductList