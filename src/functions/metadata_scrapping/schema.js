const Joi = require("@hapi/joi");

// Request Schema to validate the request
const schema = Joi.string().uri();

module.exports = {
  schema,
};
