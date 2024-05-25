import { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  console.log(params);
  return (
    <div className="App">
      <h1>Product Details Page for </h1>
    </div>
  );
}
export default ProductDetails;
