"use client";
import React from "react";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();
const API_BASE_URL = "http://localhost:3000/api";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [cart,setCart] = useState([]);
  const fetchAllProducts = async () => {
    const api = await axios.get(`${API_BASE_URL}/products`);
    setProducts(api.data.product);
    setData(api.data.product);
    console.log("fetched all products = ", products);
  };

  
  const addToCart = async (title, imagesrc, price, toast) => {
    const api = await axios.post(`${API_BASE_URL}/cart`, {
      title,
      imagesrc,
      price,
    });
    if(api.data.success)
    {
        toast(api.data.messege)
    }
    console.log("product added to cart:",api.data)
  };
  const getCartItems = async ()=>{
    const api = await axios.get(`${API_BASE_URL}/cart`);
    console.log("cart items",api.data.cartItems);
    setCart(api.data.cartItems);
  }
  const clearCart =async ()=>{
     const api = axios.delete(`${API_BASE_URL}/cart`);
     getCartItems();
  }
  useEffect(() => {
    getCartItems();
    fetchAllProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products, data, setData,addToCart,getCartItems,cart,clearCart }}>
      {children}
      {console.log(products)}
      {console.log("my data:", data)}
    </ProductContext.Provider>
  );
};
export default ProductContext;
export const useProductContext = () => useContext(ProductContext);
