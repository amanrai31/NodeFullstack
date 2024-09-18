import { Product } from "./product.model";
import { Customer } from "./customer.model";

import mongoose from mongoose;

const orderItemSchema = new mongoose.Schema({    // 2=> we can create this in another file also, if needed.
    productId:{ 
        type: mongoose.Schema.type.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:number,
        required:true,
    }
})

const orderSchema = new mongoose.Schema({
orderPrice:{
    type:number,
    required: true,
},
customer:{
    type: mongoose.Schema.type.ObjectId,
    ref: "Customer"
},
orderItems:{                                    //1=> We need total quantity so we created a seperate schema(orderItemSchema) for that.
  type: [orderItemSchema]
},
address:{
    type:String,
    required:true,
},
orderStatus:{
type:String,
enum:["PENDING","SHIPPED","DELIVERED","CANCELLED"],
default:"PENDING",
}
},{timestamps:true});

export const Order = mongoose.model("Order", orderSchema);
