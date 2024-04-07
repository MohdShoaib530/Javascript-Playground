import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Name is mandatory"],
            maxLength:[50,"Name should be less than 50 characters"]
        },
        email: {
            type:String,
            unique:true,
        },
        Username: {
            type: String,
            unique: true,
        },
        password:String,
        age:Number
    }
)

export default mongoose.model("User",userSchema)