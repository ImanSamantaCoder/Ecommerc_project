"use client"
import React from "react";
import { Libertinus_Math } from "next/font/google";
import { useProductContext } from "../context/ProductContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
const page = () => {
  const { cart, clearCart } = useProductContext();
  return (
    <div>
      <div className="container my-5">
        {cart.length == 0 ? (
          <>
            <div className="text-center">
              your cart is empty
              <Link href="/" className="btn btn-warning">
                Continue shopping
              </Link>
            </div>
          </>
        ) : (
          cart.map((product) => (
            <div
              className="card my-5 mb-3 bg-dark text-light"
              key={product._id}
            >
              <div className="row">
                <div className="col-md-4 d-flex text-align-center justify-content-center align-items-center">
                  <img
                    src={product.imagesrc}
                    alt="img"
                    className="card-img-top"
                    style={{
                      width: "200px",
                      borderRadius: "10px",
                      border: "1px solid yellow",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <h1 className="card-title">{product.title}</h1>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    {product.price}
                  </button>
                  <button className="btn btn-danger mx-3">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center mb-3 my-5">
        {cart.length!=0 ? <button onClick = {()=>clearCart()} className="btn btn-danger ">
        Clear Cart
      </button>: <></> }
      </div>
      
      {/* <button onClick = {()=>clearCart()} className="btn btn-danger">
        Clear Cart
      </button> */}
    </div>
  );
};

export default page;
