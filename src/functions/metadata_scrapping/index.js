const serverless = require("serverless-http");
const express = require("express");
const isEmpty = require("lodash/isEmpty");
const { startup } = require("./../../middlewares/index");

const model = require("./model");
const { schema } = require("./schema");
const app = express();

// this is middleware to parse your request
startup(app);

// Handle POST metadata-scrapping endpoint
app.post("/metadata-scrapping", (req, res) => {
  const URL = req.body.url;
  if (isEmpty(URL)) {
    const response = {
      message: "No request data found",
    };
    res.status(400).send(response);
  } else {
    const { error: joiError } = schema.validate(URL);
    if (!isEmpty(joiError)) {
      const response = {
        message: "Invalid URL passed",
      };
      res.status(400).send(response);
    } else {
      model
        .metadata_scrapping(URL)
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((err) => {
          const response = {
            message: "Internal server error",
          };
          res.status(400).send(response);
        });
    }
  }
});

module.exports.handler = serverless(app);
