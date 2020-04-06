/*

//var ObjectNotFoundError = require("../helpers/errors");
var Pangolin = require("../models/pangolin.model");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");

// Handle list 
exports.list = function(req, res) {
  Pangolin.get(function(err, pangolins) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.status(200).json({
      status: "success",
      message: "Pangolins retrieved successfully",
      data: pangolins
    });
  });
};

// Handle create  
exports.create = function(req, res) {
  Pangolin.find({ name: req.body.name.trim() }, function(err, pangolins) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    if (pangolins && pangolins.length > 0) {
      res.status(400).send({
        status: "error",
        message: req.body.name + " is already taken"
      });
    } else {
      var pangolin = new Pangolin();
      pangolin.name = req.body.name;
      pangolin.family = req.body.family;
      pangolin.race = req.body.race;
      pangolin.age = req.body.age;
      pangolin.food = req.body.food;
      // save the user and check for errors
      pangolin.save(function(err) {
        if (err) res.json(err);
        res.status(201).json({
          message: "Pangolin successfully created!",
          data: pangolin
        });
      });
    }
  });
};

// Handle read
exports.read = function(req, res) {
  Pangolin.findById(req.params.id, function(err, pangolin) {
    if (err) {
      res.status(404).json({
        status: "error",
        message: "Pangolin not found "+ req.params.id,
      });
    }
    res.json({
        message: "Pangolin successfully retreived",
        data: pangolin
      });
    });
};


// Handle update 
exports.update = function(req, res) {
  Pangolin.findById(req.params.id, function(err, pangolin) {
    if (err) {
      res.status(404).json({
        status: "error",
        message: "Pangolin not found "+ req.params.id,
      });
    }
    res.json({
        message: "Pangolin successfully updated",
        data: pangolin
      });
    });
};

// Handle delete 
exports.delete = function(req, res) {
  Pangolin.remove({_id: req.params.is}, function(err, pangolin) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Pangolin deleted"
      });
    }
  );
}; */

