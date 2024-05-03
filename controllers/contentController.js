import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Content } from "../models/contentSchema.js";

export const postContent = catchAsyncError(async(req, res, next) => {
    const {title, description,category, location, content, postedOn } = req.body;
    if(!title || !description || !category || !content  || !location || !postedOn){
        return next(new ErrorHandler("please provide full post details", 400));  
    }
   
    const post_content = await Content.create({
        title, 
        description,
        category, 
        location,  
        postedOn,
        content
});
    res.status(200).json({
        success: true,
        message: "post posted successfully",
        post_content,
    })
    
});




