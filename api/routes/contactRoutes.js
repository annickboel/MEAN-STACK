import express from 'express'
//import { validateToken } from '../middlewares/jwt'
import contactController from '../controllers/contactController'
//import isPrivileged from '../middlewares/is-privileged'

const router = express.Router()

// contact_list
router
	.route('/pangolins/:pangolin_id/contacts')
	.get(contactController.list)
 
 // available contact_ltst
/*router
  .route('/pangolins/available_contacts')
  .get(contactController.available_list)
 
// add_contact
router
  .route("/pangolins/:id/contacts")
  .post(contactController.create)

// remove_contact
router
  .route("/pangolins/:pangolin_id/contacts/:contact_id")
  .put(contactController.delete)*/


module.exports = router
