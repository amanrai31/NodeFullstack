import mongoose from mongoose;
const catagorySchema = new mongoose.Schema({
catagoryName:{
    type: [],
    required:true
}
},{timestamps:true});

export const Catagory = mongoose.model("Catagory", catagorySchema);