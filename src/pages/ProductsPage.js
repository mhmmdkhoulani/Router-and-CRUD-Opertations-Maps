import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
    }
    getProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Category</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.thumbnail} width={"100px"} />
                </td>
                <td>
                  <button className="btn btn-info">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsPage;
