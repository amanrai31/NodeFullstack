import mongoose from mongoose;
const catagorySchema = new mongoose.Schema({

},{timestamps:true});

export const Catagory = mongoose.model("Catagory", catagorySchema);