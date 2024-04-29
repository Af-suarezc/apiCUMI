import express from "express";
import {roomController, registerClassRoom} from "../controllers/classroomController.js";

const router = express.Router();

router.get("/class/:grado", roomController)
router.post("/createclass", registerClassRoom);
export default router;