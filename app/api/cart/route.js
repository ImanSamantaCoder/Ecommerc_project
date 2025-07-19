import connectDB from "../../utils/database";
import { addToCart, clearCart, getCartItems } from "../../controllers/cart";
export async function POST(req)
{
    await connectDB();
    return addToCart(req);
}
export async function GET(req)
{
    await connectDB();
    return getCartItems(req);
}
export async function DELETE(req)
{
    await connectDB();
    return clearCart(req);
}