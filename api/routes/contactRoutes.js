import express from 'express'
//import { validateToken } from '../middlewares/jwt'
import contactController from '../controllers/contactController'
//import isPrivileged from '../middlewares/is-privileged'

const router = express.Router()

// contact_list
router
	.route('/pangolins/:pangolin_id/contacts')
	.get(contactController.list_contacts)
  
// add_contact
router
  .route("/pangolins/:pangolin_id/contacts")
  .post(contactController.create_contact)

//remove_contact
router
  .route("/pangolins/:pangolin_id/contacts/:contact_id")
  .delete(contactController.delete_contact)

module.exports = router
