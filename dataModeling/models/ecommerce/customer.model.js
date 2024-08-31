import mongoose from mongoose;
const customerSchema = new mongoose.Schema({
username:{
type:String,
reqired:true,
unique:true,
},
email:{
    type:String,
    reqired:true,
    unique:true,
},
password:{
    type:String,
    reqired:true,
}
},{timestamps:true});

export const Customer = mongoose.model("Customer", customerSchema);