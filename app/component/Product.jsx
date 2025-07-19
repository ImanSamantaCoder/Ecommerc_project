"use client";
import React from "react";

import Link from "next/link";
import { useProductContext } from "../context/ProductContext";
import { ToastContainer, toast,Bounce } from 'react-toastify';

const Product = ({ items }) => {
  const {addToCart} = useProductContext();
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <div
                key={product._id}
                className="col-lg-4 col-md-6 my-3 text-center d-flex justify-content-center align-items-center"
              >
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem" }}
                >
                  <Link href="/">
                    <div className="d-flex justify-content-center align-items-center p-5">
                      <img src={product.imagesrc} alt="img" className="card-img-top" style={{width:"200px",borderRadius:"10px",border:"1px solid yellow"}}/>
                    </div>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-2">
                      {product.price}₹

                    </button>
                    <button onClick={()=>addToCart(product.title,product.imagesrc,product.price,toast)} className="btn btn-warning">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
