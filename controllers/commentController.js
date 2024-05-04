import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Comment } from "../models/commentSchema.js";

export const createComment = catchAsyncError(async(req, res, next) => {
    try{
        const {commentContent, postId} = req.body;
        const comment = await Comment.create({commentContent, postId});
        res.status(201).json({
            success: true,
            comment
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            error: "server error while commenting"
        });

    }

});