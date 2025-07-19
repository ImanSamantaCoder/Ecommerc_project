import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  imagesrc: {
    type: String,
    require: true,
  },
},{timestamps:true})

export default mongoose.models.Product || mongoose.model("Product",productSchema);
