import express from "express";
import { getPicsByKeyword } from "../controllers/Controllers.js";
const router = express.Router();
router.get("/getpicsbykeyword", getPicsByKeyword);
export default router;
