import { Router } from "express";
import { homepage } from "../controllers/blog.js";

const router = Router();


router.get("", homepage);
router.get("/about");

export default router;