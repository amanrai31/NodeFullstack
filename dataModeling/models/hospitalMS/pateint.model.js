import mongoose from mongoose;
const patientSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true,
    },
    age:{
        type: number,
        required:true,
    },
    gender:{
      type: string,
      enum: ["M","F","O"]
    },
    problem:{
        type:string,
        required:true,
    },
    admittedIn:{
        type:mongoose.Schema.type.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true});

export const Patient = mongoose.model("Patient", patientSchema);