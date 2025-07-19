import mongoose from "mongoose"

const connectDB = async ()=>{
    mongoose.connect("mongodb+srv://imansamantacode:drqjpC60wbvtQ5Ux@cluster0.wotimpa.mongodb.net/",{dbName:"Next_JS_Ecommerce"}).then(msg=>console.log("mongodb connection successfull")).catch(err=>console.log(err));
}
export default connectDB;
