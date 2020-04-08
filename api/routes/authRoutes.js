import express from 'express'
//import { validateToken } from '../middlewares/jwt'
import authController from '../controllers/authController'
//import isPrivileged from '../middlewares/is-privileged'

const router = express.Router()
router
	.route("/authenticate")
	.post(authController.authenticate);

module.exports = router
