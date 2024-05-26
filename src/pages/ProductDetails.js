import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    }

    getProduct();
  }, [productId]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <img
            src={product?.thumbnail}
            style={{ height: "300px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product?.title}</h5>
            <p className="card-text">{product?.description}</p>
            <p className="card-text">${product?.price}</p>

            <Link to={"/products"} className="btn btn-primary">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
