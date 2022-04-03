import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ProductList = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json()
    setProducts(data)
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': "application/json"
      }
    })
    fetchData();
  }

  return (
    <div>
      <Link to="/add" className="button is-primary">Add Product</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/edit/${product.id}`} className="button is-info is-small">Edit</Link>
                  <button onClick={() => deleteProduct(product.id)} className="button is-danger is-small">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductList