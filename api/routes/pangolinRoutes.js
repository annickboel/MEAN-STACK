import express from 'express'
//import { validateToken } from '../middlewares/jwt'
import pangolinController from '../controllers/pangolinController'
//import isPrivileged from '../middlewares/is-privileged'

const router = express.Router()

// pangolin_list
router
	.route('/pangolins')
	.get(pangolinController.list_pangolins)

// pangolin_create
router
  .route("/pangolins")
  .post(pangolinController.create_pangolin)

// pangolin_get
router
  .route("/pangolins/:id")
  .get(pangolinController.get_pangolin)

// pangolin_update
router
  .route("/pangolins/:id")
  .put(pangolinController.update_pangolin)

// pangolin_delete
router
  .route("/pangolins/:id")
  .delete(pangolinController.delete_pangolin)

module.exports = router
