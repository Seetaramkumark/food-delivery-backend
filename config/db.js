import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:3342@cluster0.kgclylp.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}