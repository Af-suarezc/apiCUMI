import express from "express";
import {classroomsInfo, teachersroomsInfo} from "../controllers/generalinfoController.js";

const router = express.Router();

router.get("/classrooms", classroomsInfo);
router.get("/teachersrooms", teachersroomsInfo);


export default router;