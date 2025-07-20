"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "../component/Product";
const page = ({ params }) => {
  const { slug } = React.use(params);
  const { products } = useProductContext();
  const [productById, setProductById] = useState(null);
  const [relatedproduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filteredProduct = products.find((p) => p._id === slug);
    if (filteredProduct) {
      setProductById(filteredProduct);
      const related = products.filter(
        (p) => p.category === filteredProduct.category
      );
      setRelatedProduct(related);
    }
  }, [slug, products]);
  if (!productById) {
    return <p className="text-center my-5"></p>;
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center justify-content-center">
          <div className="d-flex col-md-6 justify-content-center align-items-center p-5">
            <img
              src={productById.imagesrc}
              alt="img"
              className="card-img-top"
              style={{
                width: "200px",
                borderRadius: "10px",
                border: "1px solid yellow",
              }}
            />
          </div>
          <div className="col-md-6 text-center">
             <h1 className="card-title">
              {productById.title}
             </h1>
             <p className="card-text">{productById.description}</p>
             <button className="btn btn-primary mx-3">{productById.price}</button>
             <button className="btn btn-danger mx-3">Buy Now</button>
          </div>
        </div>
      </div>
      <h1 className="text-center my-5">Related Product</h1>
     
      <Product items={relatedproduct}/>
    </div>
  );
};

export default page;
