import express from 'express'
//import { validateToken } from '../middlewares/jwt'
import pangolinController from '../controllers/pangolinController'
//import isPrivileged from '../middlewares/is-privileged'

const router = express.Router()

// pangolin_list
router
	.route('/pangolins')
	.get(pangolinController.list)

// pangolin_create
router
  .route("/pangolins")
  .post(pangolinController.create)

// pangolin_get
router
  .route("/pangolins/:id")
  .get(pangolinController.get)

// pangolin_update
router
  .route("/pangolins/:id")
  .put(pangolinController.update)

module.exports = router
