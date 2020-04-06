// userController.js


User = require("../models/user.model");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// Handle list users
exports.list = function(req, res) {
  User.get(function(err, users) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      data: users
    });
  });
};

// Handle create user
exports.create = function(req, res) {
  User.find({ name: req.body.username.trim() }, function(err, users) {
  if (err) {
    res.json({
      status: "error",
      message: err
    });
  }
  if (users && users.length > 0) {
    res.status(400).send({
      status: "error",
      message: req.body.username + " already exists"
    });
  } else {
    var user = new User();
    user.username = req.body.username ? req.body.username : user.username;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 10);
    }
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    // save the user and check for errors
    user.save(function(err) {
      if (err) res.json(err);
      res.json({
          message: "New user created!",
          data: user
        });
      });
    }
  });
};

// Handle get user 
exports.read = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err);
    res.json({
      message: "User details loading..",
      data: user
    });
  });
};

// Handle update user info
exports.update = function(req, res) {
  User.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, function(
    err,
    user
  ) {
    if (err) res.send(err);

    res.json({
      message: "User Info updated",
      data: user
    });
  });
};

// Handle delete user
exports.delete = function(req, res) {
  User.remove(
    {
      _id: req.params.user_id
    },
    function(err, user) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "User deleted"
      });
    }
  );
};

exports.authenticate = function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) res.send(err);

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      // authentication successful
      let newUser = {
        token: jwt.sign({ sub: user._id }, "Thisismyscretkey"),
        firstName: user.firstName,
        lastName: user.lastName
      };
      res.json({
        status: "success",
        message: "Users retrieved successfully",
        data: newUser
      });
    } else {
      // authentication failed
      res.status(401).send({
        status: "error",
        message: "User name or password is invalid."
      });
    }
  });
};

exports.changePassword = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err);

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      // authentication successful
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 10);
      }
      user.save(function(err) {
        if (err) res.json(err);
        res.status(202).send({
          status: "success",
          message: "Password Updated successfully"
        });
      });
    } else {
      // authentication failed
      res.status(401).send({
        status: "error",
        message: "Old password is wrong."
      });
    }
  });
};
