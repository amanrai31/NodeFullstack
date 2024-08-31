import { Catagory } from "./catagory.model";
import mongoose from mongoose;
const productSchema = mongoose.Schema({
productname:{
    type:String,
    required:true,
},
productImage:{
    type:String,                             // url of that image.
   
},
price:{
    type:Number,
    default: 0,
},
stock:{
    type:Number,
    default: 0,
},
Catagory:{
    type:mongoose.Schema.type.ObjectId,
    ref:"Catagory",
    required:true,  
}
},{Timestamps:true});

export const Product = mongoose.model("Product", productSchema);