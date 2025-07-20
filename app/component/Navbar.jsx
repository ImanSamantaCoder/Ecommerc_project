"use client";
import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useProductContext } from "../context/ProductContext";
const Navbar = () => {
  const { products, data, setData,cart } = useProductContext();
  const filterByCategory = (category) => {
    setData(products.filter((p) => p.category == category));
  };
  const filterByPrice = (price) => {
    setData(products.filter((p) => (p.price <= price)));
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "blue" }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" className="navbar-brand fw-bold text-light">
            Iman's Ecommerce
          </Link>
          <form className="d-flex flex-grow-1 mx-4" role="search">
            <div className="input-group">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search products..."
              />
              <button className="btn btn-danger" type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
          <div className="position-relative">
            <Link href="/cart" className="ms-2 btn-outline-warning">
              <button className="btn btn-danger">
                <FaShoppingCart className="fs-blue text-light" />
                
                  {cart.length >0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cart.length}</span>}
               
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="bg-dark text-light my-3">
          <div className="container p-3 rounded">
            <div className="row">
              <div className="col-md-6 d-flex flex-wrap justify-contents-center align-items-center gap-2">
                <strong>Category:</strong>
                <button onClick={()=>setData(products)} className="btn btn-outline-light px3">All</button>
                <button onClick={()=>filterByCategory("mobiles")} className="btn btn-outline-light px3">Mobile</button>
                <button onClick={()=>filterByCategory("laptops")} className="btn btn-outline-light px3">Laptops</button>
                <button onClick={()=>{filterByCategory("tablets")}} className="btn btn-outline-light px3">Tablet</button>
              </div>
              <div className="col-md-6 d-flex flex-wrap justify-contents-center align-items-center gap-2">
                <strong>Price:</strong>
                <button onClick={()=>setData(products)} className="btn btn-outline-warning px3">All</button>
                <button onClick={()=>filterByPrice(29999)} className="btn btn-outline-warning px3">{"<="}29999</button>
                <button onClick={()=>filterByPrice(49999)} className="btn btn-outline-warning px3">{"<="}49999</button>
                <button onClick={()=>{filterByPrice(69999)}} className="btn btn-outline-warning px3">{"<="}69999</button>
                 <button onClick={()=>{filterByPrice(89999)}} className="btn btn-outline-warning px3">{"<="}89999</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
