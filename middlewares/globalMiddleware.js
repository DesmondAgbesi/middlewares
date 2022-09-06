const { request, response } = require("express");

const globalMiddleware = (request, response) =>{
  console.log("global middle ware started");
  next();
  console.log("global middle ware ended");
}

module.exports = {globalMiddleware,};