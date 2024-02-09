import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        if(mongoose.connections[0].readyState){
            return true
        }
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb Connected")
    } catch (error) {
        console.log("Error " + error)
        
    }
}

export default connectDB