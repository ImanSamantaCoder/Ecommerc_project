import connectDB from "../../utils/database"
import {createProduct, getProducts} from "../../controllers/product"
import { NextResponse } from "next/server";
export async function POST(req)
{
   await connectDB();
   return createProduct(req);
}
export async function GET(req)
{
   await connectDB();
   return getProducts();
}