import Cart from "../models/Cart"
import { NextResponse } from "next/server"
//add items to cart
export const addToCart =async (req)=>{
    const body = await req.json();
    const newCart = await Cart.create(body);
    return NextResponse.json({messege:"Item added successfully",success:true,cartItem:newCart})

}
//get items from cart
export const getCartItems =async (req)=>{
   const cartItems = await Cart.find();
   return NextResponse.json({messege:"Fetched all cart items",success:true,cartItems})
}
//delete cart items
export const clearCart =async ()=>{
    await Cart.deleteMany({});
    return NextResponse.json({message:"cart has been cleared",success:true})
}