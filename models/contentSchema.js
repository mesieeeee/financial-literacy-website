import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please provide the post title"],
        minLength: [10, "Post title must contain atleast 10 characters"],
        maxLength: [30, "Post Title must conatin atleast 30 characters"],
    },
    description: {
        type: String,
        required: [true, "please provide the post description"],
        minLength: [10, "Post description must contain atleast 60 characters"],
        maxLength: [30, "Post description must conatin atleast 300 characters"], 
    },
    category: {
        type: String,
        required: [true, "Category of related post is necessary"]
    },
    location: {
        type: String,
        required: [true, "Please provide exact location!"],
        minLength: [20, "location must conatin atleast 20 characters"]
    },
    content: {
        type: String,
        required: [true, 'please provide the content on which u wanna talk about']
    },
    postedOn: {
        type: Date,
        default: Date.now,
    },
})

export const Content = mongoose.model("Content", contentSchema);