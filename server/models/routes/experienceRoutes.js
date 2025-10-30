import express from "express";
import { getExperiences, getExperienceById } from "../controllers/experienceCtrl.js";
const router = express.Router();

router.get("/", getExperiences);
router.get("/:id", getExperienceById);

export default router;
