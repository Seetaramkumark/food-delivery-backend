import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,requrired:true},
    description: {type:String,requrired:true},
    price: {type:Number,requrired:true},
    image: {type:String,requrired:true},
    category: {type:String,requrired:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;