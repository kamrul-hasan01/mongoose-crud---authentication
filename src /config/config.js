// module dependency
const dotenv = require("dotenv");
dotenv.config();

// module scaffholding
let config = {};

// all env variables
config.env = {
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
};

module.exports = config;
