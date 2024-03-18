import { Router } from "express";
import { getData, postData } from "../controllers/data.controller.js"

const router = Router();


router.route("/get-data").get(
    getData
)

router.route("/post-data").post(
    postData
)

export default router;