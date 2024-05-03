import express from "express";
import { postContent } from "../controllers/contentController.js";


const router = express.Router();
router.post('/post', postContent);


export default router;