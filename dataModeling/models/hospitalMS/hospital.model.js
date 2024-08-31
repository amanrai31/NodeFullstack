import mongoose from mongoose;
const patientSchema = new mongoose.Schema({
doctors:{
    type:[string],
    required:true,
},
totalDoctors:{
    type:Number,
},
address:{
    type:string,
    required:true,
}

},{timestamps:true});

export const Patient = mongoose.model("Patient", patientSchema);