import express from "express";
import mainController from "../controllers/index.mjs";
const router = express.Router();

const controller = new mainController();

router.post('/', controller.Language);

export default router;