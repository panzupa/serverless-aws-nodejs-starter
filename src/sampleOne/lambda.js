const helper = require('./helper')

// eslint-disable-next-line no-unused-vars
module.exports.handler = async (event, context) => {
  const response = { message: helper('World') };
  return response
}
