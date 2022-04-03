import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductList from "./components/ProductList";

function App() {
  
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
