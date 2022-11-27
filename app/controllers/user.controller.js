const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

import { createRequire } from 'module'

// Create and Save a new User
exports.create = (req, res) => {
  var users = JSON.parse(fs.readFileSync(`${__dirname}/../../database.json`, 'utf8'));
  var newUser = { id: uuidv4(), first_name: req.body.first_name, last_name: req.body.last_name };
  users.push(newUser);
  try {
    fs.writeFileSync(`${__dirname}/../../database.json`, JSON.stringify(users));
    res.json(newUser);
  } catch (err) {
    console.error(err);
  }
};

// Retrieve all users from the database (with condition).
exports.findAll = (req, res) => {
  var obj = JSON.parse(fs.readFileSync(`${__dirname}/../../database.json`, 'utf8'));
  res.json(obj);
  console.log(obj);
};
  
exports.findAllPublished = (req, res) => {

};

// Find a single Tutorial with a id
exports.findOne = (req, res) => {
  
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};