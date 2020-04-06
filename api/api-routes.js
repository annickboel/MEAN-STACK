//import pangolinController from '../controllers/pangolinController'

// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to Pangolin API"
  });
});

// Import user controller
var userController = require("./controllers/users.controller");
var pangolinController = require("./controllers/pangolinController");

// User routes
router
  .route("/users")
  .get(userController.list)
  .post(userController.create);
router
  .route("/user/:user_id")
  .get(userController.read)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);
router.route("/user/authenticate").post(userController.authenticate);
router
  .route("/user/changepassword/:user_id")
  .put(userController.changePassword);


// Pangolin routes
router
  .route("/pangolins/:id")
    .get(pangolinController.retrieve)


/*router
  .route("/pangolins")
  .get(pangolinController.list)
  .post(pangolinController.create);
router
  .route("/pangolins/:id")
  .get(pangolinController.read)
  .patch(pangolinController.update)
  .put(pangolinController.update)
  .delete(pangolinController.delete);*/


// Export API routes
module.exports = router;
