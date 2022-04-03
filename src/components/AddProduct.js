import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  let navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault()
    const product = { name, price }
    await fetch('http://localhost:8080/products', {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        'Content-Type': "application/json"
      }
    })
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Title" />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input" placeholder="Price" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary">Save</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default AddProduct