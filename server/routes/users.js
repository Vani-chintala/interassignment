
import express from "express"
import {SignupController,LoginController} from "../controllers/users.js"


const router= express.Router()


router.post('/signup',SignupController)
router.post('/login',LoginController)

export default router