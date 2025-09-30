import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: {type: String , required: true},
    imageLink: {type: String, required: true}
},{timestamps: true})

const Image = mongoose.model('Image',imageSchema,'images');

export default Image;