import Product from "../models/Product";
import { NextResponse } from "next/server";
export const createProduct = async (req)=>{
    const body = await req.json();
    const newProduct = await Product.create(body);
    return NextResponse.json({messege:"Product added successfully",newProduct});
}
export const getProducts = async (req)=>{
    const product = await Product.find();
    return NextResponse.json({messege:"All Product feteched!",success:"true",product})
}