import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router = Router();

router.get("/", languageController.getReportes);
router.get("/:id", languageController.getReporte);
router.post("/", languageController.addReporte);
router.put("/:id", languageController.updateReportes);
router.delete("/:id", languageController.deleteReporte);
export default router;