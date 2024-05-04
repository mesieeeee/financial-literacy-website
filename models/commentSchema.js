import mongoose from "mongoose";
import { Content } from "./contentSchema.js";
const commentSchema = new mongoose.Schema({
    commentContent: {
        type: String,
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Content',
        required: true,
    },
    createdAt: {
        type: Date,
        deafult: Date.now
    }
});

export const Comment = mongoose.model("Comment", commentSchema);
