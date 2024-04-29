import express from "express";
import {registerTeacher, deleteTeacher} from "../controllers/teachersController.js";

const router = express.Router();

router.post("/teachersRegister", registerTeacher);
router.get("/deleteTeacher", deleteTeacher);

export default router;
